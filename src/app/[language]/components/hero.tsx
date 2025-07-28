import Container from "@/components/layout/container";
import { Language, Media } from "@/types";
import Image from "next/image";
import { FC } from "react";
import YoutubeVideoCarousel from "./youtube-video-carousel";

interface HeroProps {
  title: string;
  description: string;
  language: Language;
  mediaData: Media[];
}
const Hero: FC<HeroProps> = ({ title, description, language, mediaData }) => {
  return (
    <section
      className="min-h-[300px] py-4 bg-no-repeat bg-cover flex items-center"
      style={{
        backgroundImage: `url(${"/images/hero-bg.jpeg"})`,
      }}
    >
      <Container className="h-fit space-y-6">
        <YoutubeVideoCarousel mediaData={mediaData} className="md:hidden" />
        <div className="md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)] space-y-2">
          <h1 className="text-background mb-2 text-[21px] font-semibold md:text-4xl">
            {title}
          </h1>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
            <Image
              src={"/images/ratings.jpg"}
              alt="10ms-lelts-course-rating"
              width={130}
              height={23}
            />
            <span className="text-background text-sm sm:text-base">
              ($
              {language === "bn"
                ? "82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন"
                : "82.6% students gave 5 rating after completion."}
              )
            </span>
          </div>
          <div
            className="text-gray-400"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
