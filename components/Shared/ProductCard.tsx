import { IProduct } from "@/lib/interfaces/iproduct";
import React from "react";

interface ICardProps {
  data: IProduct;
}

export const ProductCard: React.FC<ICardProps> = ({ data }) => {
  return (
    <article className="post-card product">
      <div className="post-image">
        <img
          src={`${
            process.env.URL_MEDIA +
            data?.attributes?.image?.data[0].attributes.url
          }`}
        />
      </div>
      <div className="post-detail">
        <div className="title">{data.attributes.title}</div>
        <div className="category">
          {data.attributes.room.data.attributes.title}
        </div>
        <div className="price">Rp.{data.attributes.price_total}</div>
      </div>
    </article>
  );
};
