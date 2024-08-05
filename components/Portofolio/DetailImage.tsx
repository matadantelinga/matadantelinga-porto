import { IProdDetailImage } from "@/lib/interfaces/iproduct";
import React from "react";
import { GridWrapper } from "../Shared/GridWrapper";
import Image from "next/image";
import { useModalStore } from "@/hooks/useModal";
import { DetailImageSlider } from "./DetailImageSlider";

interface IDetailImageProps {
  dataImages: IProdDetailImage[];
}

export const DetailImage: React.FC<IDetailImageProps> = ({ dataImages }) => {
  const { openModal } = useModalStore();

  const seeDetailImage = () => {
    openModal(<DetailImageSlider dataImages={dataImages}></DetailImageSlider>);
  };

  return (
    <>
      <section className="wrapper detail-images-wrapper">
        <GridWrapper padding="pt-10 pb-0">
          {dataImages.length > 1 ? (
            <>
              <div className="col-span-12 md:col-span-6">
                <div className="img-item main-image" onClick={seeDetailImage}>
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
              <div className="col-span-12 md:col-span-6">
                <GridWrapper padding="py-0">
                  {dataImages.map((image, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <div className="col-span-6">
                          <div
                            className="img-item small-image"
                            onClick={seeDetailImage}
                          >
                            <Image
                              src={`${
                                process.env.URL_MEDIA + image?.attributes.url
                              }`}
                              alt={image?.attributes.name}
                              width={image?.attributes.width}
                              height={image?.attributes.height}
                            ></Image>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </GridWrapper>
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
