import Image from "next/image";
import Container from "./container";
import Title from "/public/title-stickers.png";
import Card from "./card";
import ImgCard01 from "/public/img-card-01.png";
import ImgCard02 from "/public/img-card-02.png";
import ImgCard03 from "/public/img-card-03.png";
import ImgCard04 from "/public/img-card-04.png";
import ImgCard05 from "/public/img-card-05.png";
import ImgCard06 from "/public/img-card-06.png";
import ImgCard07 from "/public/img-card-07.png";
import ImgCard08 from "/public/img-card-08.png";
import ImgCard09 from "/public/img-card-09.png";

const infosCard = [
  {
    title: "little tay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard01,
  },
  {
    title: "little fiona",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard02,
  },
  {
    title: "little Ghost",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard03,
  },
  {
    title: "Bear leo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard04,
  },
  {
    title: "tust fisu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard05,
  },
  {
    title: "Bear fire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard06,
  },
  {
    title: "Bartolomeo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard07,
  },
  {
    title: "Ni-rot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard08,
  },
  {
    title: "own *-*",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci eu eros semper elementum. Sed sollicitudin erat non ipsum dignissim iaculis.",
    img: ImgCard09,
  },
];

const SectionStickers = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <Container className="flex flex-col items-center">
        <div className="mt-32">
          <Image src={Title} width={570} height={129} alt="" quality={100} />
        </div>
        <div className="pb-28 mt-28 grid grid-cols-3 gap-y-[147px] gap-x-5">
          {infosCard.map((info) => (
            <Card key={info.title} data={info} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionStickers;
