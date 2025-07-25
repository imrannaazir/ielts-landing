import Container from "@/components/layout/container";
import { Phone } from "lucide-react";
import React, { FC } from "react";
import YoutubeVideoCarousel from "./youtube-video-carousel";
import { Media } from "@/types";
interface TrailerAndCTAProps {
media: Media[]
}
const TrailerAndCTA: FC<TrailerAndCTAProps> = ({media}) => {
  return (
    <Container className="relative -mt-[300px]">
      <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-background absolute right-0 md:top-[50px] md:absolute">
        <div className="md:sticky md:top-[112px]">
          <div className="md:border">
            <div className="hidden p-1 md:block">
              <YoutubeVideoCarousel mediaData={media}/>
            </div>

            {/* Mobile Title */}
            <div className="block md:hidden">
              <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
                IELTS Course by Munzereen Shahid
              </h1>
            </div>

            {/* Price Section */}
            <div className="hidden md:block p-4">
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between md:flex-col md:items-start">
                  <div className="md:mb-3">
                    <div className="inline-block text-2xl font-semibold">
                      ৳3850
                    </div>
                    <span className="inline-flex items-center ml-2 text-base font-normal md:text-xl">
                      <del>৳5000</del>
                      <div className="inline-block text-green-600 ml-2 font-medium">
                        1150 ৳ ছাড়
                      </div>
                    </span>
                  </div>
                </div>
                <button className="bg-green text-white text-center w-full mt-4 py-2 rounded-md font-semibold">
                  Enroll
                </button>
              </div>
            </div>

            {/* Course Features */}
            <div className="hidden md:block p-4">course features</div>

            {/* Contact Section */}
            <p className="hidden md:flex md:flex-col lg:flex-row justify-between mt-4 text-sm text-center text-gray-400 px-4">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
                <Phone />
                <span className="ml-1">ফোন করুন (16910)</span>
              </span>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TrailerAndCTA;
