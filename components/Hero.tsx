import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />

      </div>

      {/* UI: grid background */}
      <div
        className="
          h-screen w-full 
          dark:bg-black-100 bg-black-100 
          dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03]
          absolute top-0 left-0 flex items-center justify-center
        "
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="
            absolute pointer-events-none inset-0 flex items-center justify-center 
            dark:bg-black-100 bg-black-100 
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
          "
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my portfolio
          </p>

          <TextGenerateEffect
            words="Hi! I&apos;m Adithya S D, a Next.js Developer."
            className="
              text-center 
              text-[32px] 
              sm:text-[40px] 
              md:text-5xl 
              lg:text-6xl 
              xl:text-7xl
            "
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Crafting Seamless Web & Mobile Experiences
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
