import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type PortfolioCarouselType = {
  images: StaticImageData[] | string[];
};

const PortfolioCarousel: FC<PortfolioCarouselType> = ({ images }) => {
  if (typeof images?.[0] === "string" && images?.[0]?.endsWith(".mp4")) {
    return (
      <div className="mx-auto h-[250px] w-[280px] overflow-hidden">
        <video src={images[0]} controls className="h-auto w-full" />
      </div>
    );
  }

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      hashNavigation={{
        watchState: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.toString() + index}>
          <figure className="flex items-center justify-center">
            <Image
              src={image}
              alt=""
              width={280}
              height={250}
              objectFit="contain"
            />
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioCarousel;
