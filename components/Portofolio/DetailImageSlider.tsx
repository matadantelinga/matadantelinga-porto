import { IProdDetailImage } from "@/lib/interfaces/iproduct";
import React, { useMemo, useRef } from "react";
import { GridWrapper } from "../Shared/GridWrapper";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { LoaderSpinner } from "../Shared/LoaderSpinner";

interface IDetailImageProps {
  dataImages: IProdDetailImage[];
}

export const DetailImageSlider: React.FC<IDetailImageProps> = ({
  dataImages,
}) => {
  const sliderRef = useRef<Slider>(null);
  const thumbnailSliderRef = useRef<Slider>(null);

  const sliderSettings = useMemo(() => {
    if (dataImages.length <= 1) {
      return null;
    }

    const mainSettings: Settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      asNavFor: thumbnailSliderRef.current || undefined,
    };

    // const thumbnailSettings: Settings = {
    //   arrows: false,
    //   dots: false,
    //   infinite: true,
    //   slidesToShow: Math.min(dataImages.length, 4),
    //   slidesToScroll: 1,
    //   focusOnSelect: true,
    //   asNavFor: sliderRef.current || undefined,
    // };

    return {
      main: mainSettings,
      // thumbnail: thumbnailSettings,
    };
  }, [dataImages]);

  if (dataImages.length === 1) {
    const image = dataImages[0];
    return (
      <section className="wrapper slider detail-images-wrapper">
        <GridWrapper padding="pt-10 pb-0">
          <div className="col-span-12">
            <div className="img-item main-image">
              <Image
                src={`${process.env.URL_MEDIA + image?.attributes.url}`}
                alt={image?.attributes.name}
                width={image?.attributes.width}
                height={image?.attributes.height}
              />
            </div>
          </div>
        </GridWrapper>
      </section>
    );
  }

  if (!sliderSettings) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  return (
    <section className="wrapper slider detail-images-wrapper">
      <GridWrapper padding="pt-10 pb-0">
        <div className="col-span-12">
          <Slider ref={sliderRef} {...sliderSettings.main}>
            {dataImages.map((item) => (
              <React.Fragment key={item.id}>
                <div className="img-item main-img">
                  <img
                    src={`${process.env.URL_MEDIA + item?.attributes.url}`}
                    alt="image-slider"
                  />
                </div>
              </React.Fragment>
            ))}
          </Slider>
          {/* <div className="slider-thumbnail">
            <Slider ref={thumbnailSliderRef} {...sliderSettings.thumbnail}>
              {dataImages.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="img-item thumbnail-img">
                    <img
                      src={`${process.env.URL_MEDIA + item?.attributes.url}`}
                      alt="thumbnail-slider"
                    />
                  </div>
                </React.Fragment>
              ))}
            </Slider>
          </div> */}
        </div>
      </GridWrapper>
    </section>
  );
};
