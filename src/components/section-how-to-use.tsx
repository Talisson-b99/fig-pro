import Image from "next/image";
import Container from "./container";

import Bears from "/public/bears.png";
import ArrowLeft from "/public/arrow-left.svg";

const listHotToUse = [
  {
    title: "1 - Discover the Enchantment:",
    description:
      "Join us in three simple steps! First, explore the Featured Section and find the stickers that captivate you the most.",
  },
  {
    title: "2 - Connect to the Magic:",
    description:
      "Next, click 'Explore Now' to unveil the story behind the project in the About the Project Section. Connect to the magic that drives each unique sticker.",
  },
  {
    title: "3 - Become Part of the Tale:",
    description:
      "Lastly, click 'Learn More About Us' and embark on the journey of stickers that tell stories. Now, you're ready to become part of this enchanting tale. Just follow these steps and register to unlock a world of fun!",
  },
];

const HowToUse = () => {
  return (
    <section className="py-32 bg-[#f8f8f8]">
      <Container className="flex items-center flex-col">
        <div className="flex items-center -ml-[160px] px-5">
          <div>
            <h4 className="-rotate-90 text-[84px] font-road">How To use</h4>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-5">
              {listHotToUse.map((list) => (
                <li key={list.title}>
                  <h2 className="font-rock text-lg text-primary">
                    {list.title}
                  </h2>
                  <p className="text-gray mt-4">{list.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image src={Bears} width={570} height={589} alt="" />
          </div>
        </div>
        <a
          href="#"
          className="bg-secondary mt-16 font-road text-4xl px-14 py-4 flex items-center gap-3"
        >
          Lets Start
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8476 11.3386C19.8735 11.2788 19.8875 11.2157 19.9068 11.1539C19.9248 11.0954 19.9481 11.0394 19.9607 10.979C19.986 10.8561 19.9993 10.7313 19.9993 10.6064C19.9993 10.6045 20 10.6032 20 10.6019C20 10.4752 19.986 10.3484 19.9607 10.2236C19.9488 10.1664 19.9268 10.1136 19.9101 10.0583C19.8902 9.99331 19.8749 9.92704 19.8476 9.86399C19.819 9.79708 19.7797 9.7366 19.7438 9.67355C19.7171 9.62659 19.6958 9.57769 19.6646 9.53265C19.5907 9.42585 19.5068 9.32613 19.413 9.23541L14.3268 4.31876C13.5468 3.56473 12.2835 3.56473 11.5035 4.31876C10.7235 5.07215 10.7235 6.29456 11.5035 7.04795L13.1834 8.67182H8.1218C5.84492 8.67182 3.99334 6.88196 3.99334 4.68098V1.97174C3.99334 0.905675 3.0995 0.041626 1.99667 0.041626C0.893844 0.041626 0 0.905675 0 1.97174V4.68098C0 9.01023 3.64393 12.5321 8.1218 12.5321H13.184L11.5035 14.1566C10.7235 14.9106 10.7235 16.1324 11.5035 16.8858C11.8935 17.2621 12.404 17.4506 12.9151 17.4506C13.4263 17.4506 13.9374 17.2621 14.3268 16.8851L19.413 11.9678C19.5068 11.8771 19.5913 11.7774 19.6652 11.6699C19.6945 11.6275 19.7138 11.5818 19.7398 11.538C19.777 11.4724 19.8176 11.4087 19.8476 11.3386Z"
              fill="#000"
            />
          </svg>
        </a>
      </Container>
    </section>
  );
};
export default HowToUse;
