import { IProjectImage } from "@/lib/interfaces/iproject";
import React, { useMemo, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { LoaderSpinner } from "../Shared/LoaderSpinner";

interface iImageSlider {
  images: IProjectImage[];
}

export const ImageSlider: React.FC<iImageSlider> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = useMemo<{ main: Settings } | null>(() => {
    if (images.length <= 1) {
      return null;
    }

    return {
      main: {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  }, [images]);

  if (!sliderSettings) {
    return (
      <div className="single-image">
        <img src={`/${images[0].url}`} alt="Project Image" className="w-full" />
      </div>
    );
  }

  return (
    <Slider ref={sliderRef} {...sliderSettings.main}>
      {images.map((img) => (
        <div key={img.id} className="slide-item">
          <img src={`/${img.url}`} alt="Project Image" />
        </div>
      ))}
    </Slider>
  );
};
