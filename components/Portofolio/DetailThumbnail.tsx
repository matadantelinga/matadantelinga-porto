import { useModalStore } from "@/hooks/useModal";
import { EAlertTypeEnum } from "@/lib/enums/eAlertTypeEnums";
import { IProdDetailImage } from "@/lib/interfaces/iproduct";
import { showToast } from "@/lib/utils/common";
import { useSession } from "next-auth/react";
import React from "react";
import { DetailImageSlider } from "./DetailImageSlider";
interface IDetailThumbProps {
  imgUrl: string;
  thumbUrls: IProdDetailImage[];
}

export const DetailThumbnail: React.FC<IDetailThumbProps> = ({
  imgUrl,
  thumbUrls,
}) => {
  const { openModal } = useModalStore();
  const { data: session, status } = useSession({
    required: false,
  });

  const seeDetailImage = () => {
    if (session) {
      openModal(<DetailImageSlider dataImages={thumbUrls}></DetailImageSlider>);
    } else {
      showToast(
        EAlertTypeEnum.ERROR,
        "Silahkan Login untuk melihat gambar.",
        "thumbToast"
      );
    }
  };

  return (
    <>
      <div
        className="thumb-item rounded-xl hover-image-effect"
        onClick={seeDetailImage}
      >
        <img
          src={`${process.env.URL_MEDIA + imgUrl}`}
          alt=""
          className="rounded-xl"
        />
      </div>
    </>
  );
};
