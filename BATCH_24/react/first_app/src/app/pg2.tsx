"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const height = window.screen.height;
  const contentWidth = 5500;

  const horizontalMax = contentWidth - 500;

  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalMax]);

  return (
    <div style={{ height: `calc(100vh + ${horizontalMax}px)` }}>
      <div ref={ref} style={{
        backgroundColor: "red",
      }}>
        <motion.div
          style={{
            position: "sticky",
            top: 0,
            display: "flex",
            gap: 16,
            x,
            backgroundColor: "red",
            height: height,
            width: contentWidth
          }}
        >
          <h1 className="font-bold text-black text-[40rem]">
            ENCAPSULATION
          </h1>
        </motion.div>
      </div>
      <div style={{
        backgroundColor: "red",
      }}>
      </div>

      <div
        style={{
          position: "sticky",
          top: height,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          overflowY: "hidden"
        }}
      >

        <div style={{ width: "100%", height: 100, backgroundColor: "green" }}>Box 1</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "blue" }}>Box 2</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "orange" }}>Box 3</div>


        <div style={{ width: "100%", height: 100, backgroundColor: "green" }}>Box 1</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "blue" }}>Box 2</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "orange" }}>Box 3</div>


        <div style={{ width: "100%", height: 100, backgroundColor: "green" }}>Box 1</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "blue" }}>Box 2</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "orange" }}>Box 3</div>


        <div style={{ width: "100%", height: 100, backgroundColor: "green" }}>Box 1</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "blue" }}>Box 2</div>
        <div style={{ width: "100%", height: 100, backgroundColor: "orange" }}>Box 3</div>

      </div>

    </div >
  );
}
