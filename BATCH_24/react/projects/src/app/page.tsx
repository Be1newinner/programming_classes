import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-slate-200 w-80 h-100 rounded-4xl text-black overflow-hidden gap-12">
        <div className="h-1/2 bg-[url(https://vectordiary.com/wp-content/uploads/2013/12/magic-waves.jpg)] bg-cover"></div>
        <div className="flex flex-col flex-1 justify-evenly pb-4">
          <h1 className="text-center text-2xl">Vijay Kumar</h1>
          <p className="text-center text-sm text-gray-600">
            Full Stack Developer
          </p>
          <div className="flex gap-2 justify-center">
            <button className="btn-outline">View</button>
            <Link className="btn-filled" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Profile Photo  */}
        <Image
          className="rounded-full h-24 w-24 absolute top-1/2 left-1/2 -translate-1/2 border-10 border-slate-200 hover:rotate-y-180 transition-all duration-500 cursor-pointer active:scale-[0.9]"
          src="/images/me.webp"
          height={150}
          width={150}
          alt="DP"
        />
      </div>
    </main>
  );
}
