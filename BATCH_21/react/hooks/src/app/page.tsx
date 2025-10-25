import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="p-4">
        <h1>Home Page</h1>
        <div className="flex flex-col text-sm list-disc">
          <ul className="list-disc *:hover:underline text-blue-600 ">
            <li>
              <Link href="/use_state">Use State Hook</Link>
            </li>
            <li>
              <Link href="/contacts">Contact Page</Link>
            </li>
          </ul>
        </div>
        <Image src={"/images/doraemon.webp"} alt="Doramon" width={250} height={304} />
      </main>
    </div>
  );
}
