import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type PortfolioCarouselType = {
  images: StaticImageData[] | string[];
};

const PortfolioCarousel: FC<PortfolioCarouselType> = ({ images }) => {
  if (typeof images?.[0] === "string" && images?.[0]?.endsWith(".mp4")) {
    return <video src={images[0]} controls />;
  }

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={images.length > 1}
    >
      {images.map((image, index) => (
        <Image key={image.toString()} src={image} alt="" priority={true} />
      ))}
    </Carousel>
  );
};

export default PortfolioCarousel;
