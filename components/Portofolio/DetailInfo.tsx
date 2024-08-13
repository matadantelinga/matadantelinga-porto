import { useModalStore } from "@/hooks/useModal";
import { IProductDetail } from "@/lib/interfaces/iproduct";
import React from "react";
import { AskForm } from "../AskPrice/AskForm";
import { GridWrapper } from "../Shared/GridWrapper";
import { SectionTitle } from "../Shared/SectionTitle";
import { DetailThumbnail } from "./DetailThumbnail";
import { InfoPropsItem } from "./InfoPropsItem";
import { PriceDetail } from "./PriceDetail";
import { DetailImageSlider } from "./DetailImageSlider";

interface IDetailInfoProps {
  data: IProductDetail;
}

export const DetailInfo: React.FC<IDetailInfoProps> = ({ data }) => {
  const { openModal } = useModalStore();

  const seePriceDetail = () => {
    openModal(
      <PriceDetail
        image={data?.attributes?.image?.data[0]}
        prices={data?.attributes?.price_detail}
      ></PriceDetail>
    );
  };

  return (
    <>
      <section className="wrapper detail-info-wrapper">
        <GridWrapper>
          <div className="col-span-12 md:col-span-8">
            <SectionTitle>{data.attributes.title}</SectionTitle>
            <div className="price py-5">
              IDR. {data.attributes.price_total}{" "}
              {data.attributes.price_detail.length > 0 && (
                <span
                  className="text-c-black underline cursor-pointer"
                  onClick={seePriceDetail}
                >
                  Lihat Detail
                </span>
              )}
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
                      <React.Fragment key={design.id}>
                        {index <= 4 && (
                          <React.Fragment key={design.id}>
                            <DetailThumbnail
                              imgUrl={design.attributes.url}
                              thumbUrls={data.attributes.design_mockup.data}
                            ></DetailThumbnail>
                          </React.Fragment>
                        )}
                      </React.Fragment>
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
                          <React.Fragment key={design.id}>
                            <DetailThumbnail
                              imgUrl={design.attributes.url}
                              thumbUrls={data.attributes.before_after.data}
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
