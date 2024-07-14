import { IProduct } from "@/lib/interfaces/iproduct";
import React from "react";

interface ICardProps {
  data: IProduct;
}

export const ProductCard: React.FC<ICardProps> = ({ data }) => {
  return (
    <article className="post-card">
      <div className="post-image">
        <img
          src={data.attributes.image.data[0].attributes.url}
          alt={
            data.attributes.image.data[0].attributes.alternativeText ||
            data.attributes.title
          }
        />
      </div>
      <div className="post-detail">
        <div className="title">{data.attributes.title}</div>
        <div className="total">Price: {data.attributes.price_total}</div>
      </div>
    </article>
  );
};
