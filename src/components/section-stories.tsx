import Image from "next/image";
import Container from "./container";

import Stories from "/public/stories.png";
import Arrow from "/public/arrow-bottom.png";

const SectionStories = () => {
  return (
    <section className="my-28 relative">
      <Container className="flex flex-col items-center relative">
        <div className="flex gap-3 text-xl text-gray">
          <span>Stickers</span>
          <span>That</span>
          <span>Tell</span>
        </div>
        <h2 className="font-primary font-road text-[459px] -mt-44 uppercase">
          Stories
        </h2>
        <div className="flex items-center gap-12 -mt-96">
          <Image
            src={Stories}
            width={500}
            height={780}
            alt=""
            className="-mt-28"
          />
          <div className="flex-1 max-w-[443px] pt-20">
            <p>
              Each sticker is a small visual narrative, conveying feelings and
              emotions in every pixel. From funny expressions to emotional
              moments, our stickers are more than simple images; they are
              stories you can share with the world.
              <br />
              <br />
              Check out some of our sticker gallery to get even more hyped.
            </p>
          </div>
        </div>
      </Container>
      <div className="absolute top-[580px] left-[620px] z-10">
        <Image src={Arrow} width={470} height={250} alt="" quality={100} />
      </div>
    </section>
  );
};

export default SectionStories;
