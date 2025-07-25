import Container from "@/components/layout/container";
import Image from "next/image";
import { FC } from "react";

interface HeroProps {
  title: string;
  description: string;
}
const Hero: FC<HeroProps> = ({ title, description }) => {
  return (
    <section
      className="min-h-[300px] bg-no-repeat bg-cover flex items-center"
      style={{
        backgroundImage: `url(${"/images/hero-bg.jpeg"})`,
      }}
    >
      <Container className="h-fit">
        <div className="md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)] space-y-2">
          <h1 className="text-background mb-2 text-[21px] font-semibold md:text-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <Image
              src={"/images/ratings.jpg"}
              alt="10ms-lelts-course-rating"
              width={130}
              height={23}
            />
            <span className="text-background">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
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
