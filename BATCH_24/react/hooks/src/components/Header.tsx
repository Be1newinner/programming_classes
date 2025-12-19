import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-orange-500 px-8 py-4">
      <nav>
        <ul className="flex gap-4 *:hover:underline *:cursor-pointer">
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/page1">Page1</Link>
          </li>

          <li>
            <Link href="/page2">Page2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
