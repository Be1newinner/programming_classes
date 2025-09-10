"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/about/me">ABOUT</Link>
      count: {count}
      <Image
        src={"/images/1715414277085-i.webp"}
        alt="DORAEMON"
        width={250}
        height={250}
        className="max-w-30 aspect-video"
      />
      <Image
        src={
          "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7085/1715414277085-i"
        }
        alt="DORAEMON"
        width={250}
        height={250}
        className="max-w-30 aspect-video"
      />
    </div>
  );
}
