import { IRoomCategoryAttributes } from "@/lib/interfaces/icategory";
import React from "react";

interface ICardProps {
  data: IRoomCategoryAttributes;
}

export const CategoryCard: React.FC<ICardProps> = ({ data }) => {
  return (
    <article className="post-card">
      <div className="post-image">
        <img
          src={`${process.env.URL_MEDIA + data?.image?.data?.attributes?.url}`}
          alt={data.slug}
        />
      </div>
      <div className="post-detail">
        <div className="title">{data?.title}</div>
        <div className="total">{data.products.data.length ?? 0} proyek</div>
      </div>
    </article>
  );
};
