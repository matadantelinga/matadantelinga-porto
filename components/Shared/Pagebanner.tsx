import React from "react";

interface iPageBanner {
  pageBannerTitle: string;
  imageUrl: string;
}

export const PageBanner: React.FC<iPageBanner> = ({
  pageBannerTitle,
  imageUrl,
}) => {
  return (
    <section className="w-full py-5">
      <h2>{pageBannerTitle}</h2>
      <img src={imageUrl} alt="" />
    </section>
  );
};
