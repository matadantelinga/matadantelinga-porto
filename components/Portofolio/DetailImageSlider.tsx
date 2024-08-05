import { IProdDetailImage } from "@/lib/interfaces/iproduct";
import React from "react";
import { GridWrapper } from "../Shared/GridWrapper";
import Image from "next/image";
import Slider from "react-slick";

const settings = {
  arrow: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

interface IDetailImageProps {
  dataImages: IProdDetailImage[];
}

export const DetailImageSlider: React.FC<IDetailImageProps> = ({
  dataImages,
}) => {
  return (
    <>
      <section className="wrapper slider detail-images-wrapper">
        <GridWrapper padding="pt-10 pb-0">
          {dataImages.length > 1 ? (
            <>
              <div className="col-span-12">
                <Slider {...settings}>
                  {dataImages
                    ? dataImages.map((item) => {
                        return (
                          <React.Fragment key={item.id}>
                            <div className="img-item main-img">
                              <img
                                src={`${
                                  process.env.URL_MEDIA + item?.attributes.url
                                }`}
                                alt="image-slider"
                              />
                            </div>
                          </React.Fragment>
                        );
                      })
                    : null}
                </Slider>
                <div className="slider-thumbnail">
                  {dataImages
                    ? dataImages.map((item) => {
                        return (
                          <React.Fragment key={item.id}>
                            <div className="img-item">
                              <img
                                src={`${
                                  process.env.URL_MEDIA + item?.attributes.url
                                }`}
                                alt="image-slider"
                              />
                            </div>
                          </React.Fragment>
                        );
                      })
                    : null}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-12">
                <div className="img-item main-image">
                  <Image
                    src={`${
                      process.env.URL_MEDIA + dataImages[0]?.attributes.url
                    }`}
                    alt={dataImages[0]?.attributes.name}
                    width={dataImages[0]?.attributes.width}
                    height={dataImages[0]?.attributes.height}
                  ></Image>
                </div>
              </div>
            </>
          )}
        </GridWrapper>
      </section>
    </>
  );
};
