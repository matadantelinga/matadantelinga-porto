import { ItemWhy } from "@/lib/interfaces/ihomepage";
import React from "react";

interface IWhyChooseCardProps {
  data: ItemWhy;
}

export const WhyChooseCard: React.FC<IWhyChooseCardProps> = ({ data }) => {
  return (
    <>
      <article className="why-card">
        <div className="post-image">
          <img
            src={`${process.env.URL_MEDIA + data?.image?.data.attributes.url}`}
            alt=""
          />
        </div>
        <div className="post-detail">
          <div className="title">{data.title}</div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </article>
    </>
  );
};
