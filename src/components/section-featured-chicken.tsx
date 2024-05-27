import Image from "next/image";
import ChickerFeatured from "/public/chicken-featured.png";

const SectionFeautedChicken = () => {
  return (
    <section className="max-w-[848px] w-full mx-auto py-28">
      <div>
        <p>
          Discover stickers that are true stars in our catalog! Our Featured
          Section showcases the most incredible and enchanting creations, ready
          to bring life to your chats and make your conversations even more
          special.
        </p>
      </div>
      <div className=" border-[1.5px] border-[#FFE0B1] rounded-3xl mt-24">
        <div className="bg-secondary h-[267px] rounded-3xl m-[3px] flex items-center">
          <div className="-mt-16">
            <Image
              src={ChickerFeatured}
              width={230}
              height={327}
              alt=""
              quality={100}
            />
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-5">
              <div>
                <span className="text-sm font-bold">sticker library</span>
                <h3 className="text-7xl font-road text-white">+1000</h3>
              </div>
              <div className="h-28 w-px bg-white/45"></div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <span className="text-sm font-bold">free stickers</span>
                <h3 className="text-7xl font-road text-white">+293</h3>
              </div>
              <div className="h-28 w-px bg-white/45"></div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <span className="text-sm font-bold">
                  sticker created every day
                </span>
                <h3 className="text-7xl font-road text-white">+1000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeautedChicken;
