import SectionFeautedChicken from "@/components/section-featured-chicken";
import SectionHero from "@/components/section-hero";
import HowToUse from "@/components/section-how-to-use";
import SectionStickers from "@/components/section-stickers";
import SectionStories from "@/components/section-stories";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionFeautedChicken />
      <HowToUse />
      <SectionStories />
      <SectionStickers />
    </>
  );
}
