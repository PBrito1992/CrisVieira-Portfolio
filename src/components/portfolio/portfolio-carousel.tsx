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
    return <video src={images[0]} controls />;
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
          <Image src={image} alt="" priority={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioCarousel;
