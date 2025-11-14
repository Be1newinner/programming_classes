"use client";
import { useEffect, useRef, useState } from "react";

export default function App() {
  // The component uses several state variables and refs to track the scroll position, viewport size, and the element that will receive the horizontal scroll.
  const [viewport, setViewport] = useState({ height: 0, width: 0 });
  const [scrolled, setScrolled] = useState({ x: 0, y: 0 });
  const middleRef = useRef(null);

  const THRESHOLD = 1000; // change as needed

  // The component uses the `useEffect` hook to set up event listeners for window scroll and resize events.
  // track window scroll
  useEffect(() => {
    function handleScroll() {
      setScrolled({ x: window.scrollX, y: window.scrollY });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // update viewport size
  useEffect(() => {
    function updateViewport() {
      setViewport({ height: window.innerHeight, width: window.innerWidth });
    }
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // When scrolled past threshold: lock body scroll and map vertical -> horizontal scroll
  useEffect(() => {
    // guard element
    const el = middleRef.current;
    if (!el) {
      // still update body lock if needed even if el not ready
      if (scrolled.y >= THRESHOLD) {
        lockBodyScroll();
      } else {
        unlockBodyScroll();
      }
      return;
    }

    if (scrolled.y >= THRESHOLD) {
      // Example mapping: how far beyond threshold we are becomes scrollLeft
      const beyond = scrolled.y - THRESHOLD;
      // you may want to scale / clamp this value
      el.scrollLeft = beyond;

      // lock page scroll, so window won't move more
      lockBodyScroll();
    } else {
      // below threshold — restore normal behavior
      unlockBodyScroll();
    }

    // cleanup handled by lock/unlock functions when necessary
    return;
  }, [scrolled.y]);

  // helpers to lock/unlock body scrolling (preserve/restore scroll position)
  const prevBodyStyle = useRef({ overflow: "", position: "", top: "" });
  const lockedScrollTop = useRef(0);

  // The lockBodyScroll and unlockBodyScroll functions are used to lock and unlock the body scroll when the threshold is reached.
  function lockBodyScroll() {
    // If already locked, do nothing
    if (document.body.style.position === "fixed") return;

    // preserve
    prevBodyStyle.current = {
      overflow: document.body.style.overflow || "",
      position: document.body.style.position || "",
      top: document.body.style.top || ""
    };

    lockedScrollTop.current = window.scrollY || window.pageYOffset;

    // freeze body (prevents jump when removing scrollbars)
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollTop.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
  }

  function unlockBodyScroll() {
    // if not locked, nothing to do
    if (document.body.style.position !== "fixed") return;

    // restore styles
    document.body.style.position = prevBodyStyle.current.position;
    document.body.style.top = prevBodyStyle.current.top;
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = prevBodyStyle.current.overflow;

    // restore window scroll position
    window.scrollTo(0, lockedScrollTop.current);
  }

  // optional: log horizontal scroll of middle element
  useEffect(() => {
    const el = middleRef.current;
    if (!el) return;
    function onInnerScroll() {
      // you can use this to sync something or detect direction
      // console.log("inner scrollLeft:", el.scrollLeft);
    }
    el.addEventListener("scroll", onInnerScroll);
    return () => el.removeEventListener("scroll", onInnerScroll);
  }, []);

  // The component returns a JSX element with three main sections: top, middle, and bottom.
  return (
    <div>
      {/* top section */}
      <div style={{ backgroundColor: "red", height: viewport.height || "100vh", width: "100%" }}>
        <h2>1 - top section</h2>
        <p>Scroll down until {THRESHOLD}px to lock the page and map vertical → horizontal.</p>
      </div>

      {/* middle section with horizontal scroll */}
      <div
        ref={middleRef}
        style={{
          backgroundColor: "green",
          height: 300,
          overflowX: "scroll",
          whiteSpace: "nowrap"
        }}
      >
        {/* wide inner content so there's horizontal scroll */}
        <div style={{ width: 2000, height: "100%", background: "orange" }} />
      </div>

      {/* bottom section */}
      <div style={{ backgroundColor: "blue", height: viewport.height || "100vh", width: "100%" }}>
        <h2>3 - bottom section</h2>
      </div>
    </div>
  );
}
