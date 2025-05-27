import Image from "next/image";
import WiggleElement from "@/components/WiggleElement";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <WiggleElement className="row-start-1">
        
          <Image          
            src="/fullbrand.png"
            alt="aripple logo"
            width={100}
            height={38}
            priority
          />          
      </WiggleElement>
      <main className="flex flex-col gap-[32px] row-start-2 items-start lg:items-center ">
        
        <p className="text-black text-6xl">
          A-ripple of your imagination.
        </p>
     
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black transition-colors flex items-center justify-center  text-black gap-2 hover:bg-[#73AB84] hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            
            rel="noopener noreferrer"
          >
            Coming soon
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-black"
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
