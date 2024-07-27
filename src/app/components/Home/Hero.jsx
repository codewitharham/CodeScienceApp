import React from "react";
import { BackgroundBeams } from "../ui/backgroundBeams";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FlipWords } from "../ui/FlipWords";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import Link from "next/link";

const Hero = () => {
  const word2 = ["Where Ideas Code", "Tech Thrives"];

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex items-center justify-center antialiased">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full dark:bg-black bg-neutral-950 bg-dot-black/[0.2] absolute inset-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>

      <div className="p-4 max-w-full relative z-20 w-full pt-20 md:pt-0 flex flex-col items-center text-center">
        <div className="mx-auto lg:py-32 my-5">
          <div className="flex flex-row lg:flex-row justify-center">
            <div>
              <TextGenerateEffect
                words="Code"
                className="md:mx-2 my-2 text-pretty uppercase font-extrabold tracking-tight leading-none text-white sm:text-[60px] text-[40px] md:text-[70px] align-middle lg:text-[80px]"
              />
            </div>
            <div>
              <TextGenerateEffect
                words="Science"
                className="md:mx-2 my-2 text-pretty uppercase font-extrabold tracking-wider leading-none text-white sm:text-[60px] text-[40px] md:text-[70px] align-middle lg:text-[80px]"
              />
            </div>
          </div>

          <br />

          <div className="w-full h-10 relative">
            <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
            <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />
          </div>

          <div className="">
            <FlipWords
              words={word2}
              className="font-extralight lg:space-x-7 md:space-x-3 tracking-normal justify-between text-3xl md:text-5xl"
            />
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Get started</span>
            </HoverBorderGradient>
            <Link href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-auto">
          {/* Add any image or content here if needed */}
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;
