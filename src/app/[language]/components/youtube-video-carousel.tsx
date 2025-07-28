"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Media } from "@/types";
import { ClassValue } from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
type YoutubeVideoCarouselProps = {
  mediaData: Media[];
  className?: ClassValue;
};
const YoutubeVideoCarousel: FC<YoutubeVideoCarouselProps> = ({
  mediaData,
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const selectedItem = mediaData[selectedIndex];

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    if (selectedItem.resource_type === "video") {
      setIsPlaying(true);
    }
  };

  // Reset playing state when selected index changes
  useEffect(() => {
    setIsPlaying(false);
  }, [selectedIndex]);

  const getImageSrc = (item: Media) => {
    if (item.resource_type === "image") {
      return item.resource_value;
    }
    return item.thumbnail_url;
  };

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <section className={cn("w-full  space-y-3 ", className)}>
      {/* Main Video/Image Display */}
      <Card className="relative rounded-none overflow-hidden p-0 shadow-none aspect-video ">
        <div className=" w-full h-full  min-h-full">
          {isPlaying && selectedItem.resource_type === "video" ? (
            <iframe
              src={getYouTubeEmbedUrl(selectedItem.resource_value)}
              className="w-full h-full"
              allowFullScreen
            />
          ) : (
            <>
              <Image
                src={getImageSrc(selectedItem)}
                alt="Selected media"
                fill
                className="object-cover"
                priority
              />
              {selectedItem.resource_type === "video" && (
                <div className="absolute bg-black/40 inset-0 flex items-center justify-center">
                  <button onClick={handlePlay} className="cursor-pointer">
                    <Image
                      src={"/svgs/primary-play-button.svg"}
                      width={50}
                      height={50}
                      alt="play-youtube-video-btn"
                    />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        {/* buttons */}
        <div className="   *:flex *:items-center *:justify-center *:disabled:opacity-60 *:disabled:cursor-not-allowed  *:bg-background *:rounded-full   *:aspect-square *:p-1 *:cursor-pointer">
          <button
            className="absolute top-1/2 left-3"
            disabled={selectedIndex === 0}
            onClick={() => setSelectedIndex(selectedIndex - 1)}
          >
            <ChevronLeft className="size-5 text-gray-600" strokeWidth={2.5} />
          </button>
          <button
            className="absolute top-1/2 right-3"
            disabled={selectedIndex === mediaData.length - 1}
            onClick={() => setSelectedIndex(selectedIndex + 1)}
          >
            <ChevronRight className="size-5 text-gray-600" strokeWidth={2.5} />
          </button>
        </div>
      </Card>

      <Carousel
        opts={{
          align: "start",
          loop: false,
          slidesToScroll: isMobile ? 1 : 3,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 cursor-grab">
          {mediaData.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "pl-2 md:pl-4 ",
                isMobile ? "basis-1/3" : "basis-1/5"
              )}
            >
              <button
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  "relative w-full cursor-pointer aspect-video  overflow-hidden border-2 transition-all",
                  selectedIndex === index
                    ? "border-primary rounded-sm"
                    : "border-gray-300 hover:border-gray-400"
                )}
              >
                <Image
                  src={getImageSrc(item)}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {item.resource_type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      width={50}
                      height={50}
                      alt="play-youtube-video"
                      src={`/svgs/secondary-play-button.svg`}
                      className="w-5 h-5"
                    />
                  </div>
                )}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default YoutubeVideoCarousel;
