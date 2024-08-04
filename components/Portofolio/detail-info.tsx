import { IProductDetail } from "@/lib/interfaces/iproduct";
import { GridWrapper } from "../Shared/GridWrapper";
import React from "react";
import { SectionTitle } from "../Shared/SectionTitle";
import { InfoPropsItem } from "./info-props-item";
import { DetailThumbnail } from "./detail-thumbnail";
import { AskPrice } from "../AskPrice/AskPrice";
import { AskForm } from "../AskPrice/AskForm";

interface IDetailInfoProps {
  data: IProductDetail;
}

export const DetailInfo: React.FC<IDetailInfoProps> = ({ data }) => {
  return (
    <>
      <section className="wrapper detail-info-wrapper">
        <GridWrapper>
          <div className="col-span-12 md:col-span-8">
            <SectionTitle>{data.attributes.title}</SectionTitle>
            <div className="price py-5">
              IDR. {data.attributes.price_total}{" "}
              <span className="text-c-black underline cursor-pointer">
                Lihat Detail
              </span>
            </div>
            <div className="bg-c-gray p-5 rounded-lg">
              <GridWrapper padding="pt-2 pb-2">
                <InfoPropsItem
                  icon="/icons/icon-home.svg"
                  data={"Room Name"}
                ></InfoPropsItem>
                <InfoPropsItem
                  icon="/icons/icon-cat.svg"
                  data={"Type Name"}
                ></InfoPropsItem>
                <InfoPropsItem
                  icon="/icons/icon-pin.svg"
                  data={data.attributes.location}
                ></InfoPropsItem>
              </GridWrapper>
              <GridWrapper padding="pt-2 pb-2">
                <InfoPropsItem
                  icon="/icons/icon-size.svg"
                  data={data.attributes.luas}
                  isSize={true}
                ></InfoPropsItem>
                <InfoPropsItem
                  icon="/icons/icon-clock.svg"
                  data={data.attributes.timeline_project}
                ></InfoPropsItem>
              </GridWrapper>
            </div>
            <div className="description-detail pt-10">
              <h2 className="text-2xl font-bold pb-5">Tentang Project</h2>
              <div className="page-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.attributes.description.replace(
                      /<p>&nbsp;<\/p>/g,
                      ""
                    ),
                  }}
                ></div>
              </div>
            </div>
            {data.attributes.design_mockup?.data?.length > 0 && (
              <>
                <div className="description-detail pt-10">
                  <h2 className="text-2xl font-bold pb-5">Desain</h2>
                  <div className="thumb-wrapper flex gap-3">
                    {data.attributes.design_mockup.data.map((design, index) => (
                      <>
                        {index <= 4 && (
                          <React.Fragment key={index}>
                            <DetailThumbnail
                              imgUrl={design.attributes.url}
                            ></DetailThumbnail>
                          </React.Fragment>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </>
            )}
            {data.attributes.before_after?.data?.length > 0 && (
              <>
                <div className="description-detail py-10">
                  <h2 className="text-2xl font-bold pb-5">Before & After</h2>
                  <div className="thumb-wrapper flex gap-3">
                    {data.attributes.before_after.data.map((design, index) => (
                      <>
                        {index <= 4 && (
                          <React.Fragment key={index}>
                            <DetailThumbnail
                              imgUrl={design.attributes.url}
                            ></DetailThumbnail>
                          </React.Fragment>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="border shadow-md rounded-xl p-5">
              <h2 className="text-2xl font-bold pb-5">Tanya Harga Sekarang</h2>
              <AskForm></AskForm>
            </div>
          </div>
        </GridWrapper>
      </section>
    </>
  );
};
