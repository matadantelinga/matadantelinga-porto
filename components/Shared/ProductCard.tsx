"use client";
import { IProduct } from "@/lib/interfaces/iproduct";
import { useRouter } from "next/navigation";
import React from "react";

interface ICardProps {
  data: IProduct;
}

export const ProductCard: React.FC<ICardProps> = ({ data }) => {
  const router = useRouter();
  const seeDetail = () => {
    router.push(`/portofolio/${data.attributes.slug}`);
  };

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
        <div className="title" onClick={seeDetail}>
          {data.attributes.title}
        </div>
        <div className="category">
          {data.attributes.room.data.attributes.title}
        </div>
        <div className="price">Rp.{data.attributes.price_total}</div>
      </div>
    </article>
  );
};
