import {
  IProdDetailImage,
  IProductPriceDetail,
} from "@/lib/interfaces/iproduct";
import React from "react";
import { GridWrapper } from "../Shared/GridWrapper";
import Image from "next/image";

interface IPriceDetailProps {
  prices: IProductPriceDetail[];
  image: IProdDetailImage;
}

interface IPriceItemProps {
  index: number;
  title: string;
  description: string;
  price: string;
}

const PriceItem: React.FC<IPriceItemProps> = ({
  index,
  title,
  description,
  price,
}) => {
  return (
    <>
      <div className="price-item">
        <div className="flex gap-2">
          <div className="numbering black small">{index + 1}</div>
          <div className="title ">
            <p className="font-bold capitalize">{title}</p>
            <div className="detail">
              <div
                dangerouslySetInnerHTML={{
                  __html: description.replace(/<p>&nbsp;<\/p>/g, ""),
                }}
              ></div>
            </div>
          </div>
          <div className="price ml-auto">Rp.{price}</div>
        </div>
      </div>
    </>
  );
};

export const PriceDetail: React.FC<IPriceDetailProps> = ({ prices, image }) => {
  return (
    <>
      <GridWrapper>
        <div className="col-span-12">
          <div className="img-item main-image">
            <Image
              src={`${process.env.URL_MEDIA + image?.attributes.url}`}
              alt={image?.attributes.name}
              width={image?.attributes.width}
              height={image?.attributes.height}
              className="rounded-xl"
            ></Image>
          </div>
          <div className="py-5">
            <h2 className="text-xl font-bold pb-5">Rincian Harga</h2>
            <div className="page-content">
              <div className="price-items">
                {prices.length > 0 &&
                  prices.map((price, index) => (
                    <React.Fragment key={index}>
                      <PriceItem
                        index={index}
                        title={price.title}
                        description={price.description}
                        price={price.price}
                      ></PriceItem>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </GridWrapper>
    </>
  );
};
