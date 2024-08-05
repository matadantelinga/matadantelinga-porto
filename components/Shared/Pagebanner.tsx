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
    <section id="pageBanner" className="w-full py-5">
      <div className="wrapper">
        <figure className="bannerImg">
          <img src={imageUrl} alt="" />
        </figure>
        <h2>{pageBannerTitle}</h2>
      </div>
    </section>
  );
};
