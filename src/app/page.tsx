import Image from "next/image";
import WiggleElement from "@/components/WiggleElement";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <WiggleElement className="row-start-1">
        <h1 className="pt-30 text-9xl font-bold text-left">
            Aripple
        </h1>
      </WiggleElement>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Image
          className="dark:invert"
          src="/arpple-dark.png"
          alt="aripple logo"
          width={100}
          height={38}
          priority
        />
        <p className="sm">A ripple of your imagination.</p>
        

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black transition-colors flex items-center justify-center  text-black gap-2 hover:bg-blue-600 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            
            rel="noopener noreferrer"
          >
            Coming soon
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://magico-space.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          By Keming Wang →
        </a>
        
      </footer>
    </div>
  );
}
