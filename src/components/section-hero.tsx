import Image from "next/image";
import Container from "./container";

import ArrowLeft from "/public/arrow-left.svg";
import MinGhost01 from "/public/min-ghost01.svg";
import MinGhost02 from "/public/min-ghost02.svg";
import MinGhost03 from "/public/min-ghost03.svg";
import GhostBig from "/public/ghost.png";

const SectionHero = () => {
  return (
    <section className="min-h-[980px] w-full  top-0 bg-bg-hero bg-no-repeat bg-cover">
      <Container className="flex  relative h-full min-h-[980px] ">
        <div className="w-full max-w-1xl mt-[292px]">
          <h1 className="font-road text-[105px] leading-[72%] text-primary">
            <span className="text-gray">Explore the</span> <br /> Enchanted
            World <br />
            <span className="font-rock text-4xl block text-secondary">
              of Animated Stickrs!
            </span>
          </h1>
          <p className="py-10 text-gray">
            Welcome to Figpro, your gateway to a universe filled with magic and
            fun! Explore our exclusive sections and dive into an ocean of
            creativity.
          </p>

          <a
            href="#"
            className="text-with-border text-4xl font-road text-primary flex items-center gap-3"
          >
            Lets Go
            <Image src={ArrowLeft} alt="arrow" width={20} height={20} />
          </a>

          <div className="flex items-center gap-4 mt-28">
            <div className="flex items-center -space-x-4">
              <Image src={MinGhost01} width={47} height={47} alt="" />
              <Image src={MinGhost02} width={47} height={47} alt="" />
              <Image src={MinGhost03} width={47} height={47} alt="" />
            </div>
            <span className="text-sm text-primary font-bold ">
              +339k Active Users
            </span>
          </div>
        </div>

        <div className="">
          <Image
            src={GhostBig}
            width={512}
            height={652}
            alt=""
            quality={100}
            className="absolute -bottom-[100px] right-0"
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionHero;
