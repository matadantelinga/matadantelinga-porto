import React from "react";

interface IInfoProps {
  icon: string;
  data: string;
  isSize?: boolean;
}

export const InfoPropsItem: React.FC<IInfoProps> = ({ icon, data, isSize }) => {
  return (
    <>
      <div className="col-span-6 md:col-span-4">
        <div className="props-item">
          <div className="props-icon flex gap-1 align-items-center">
            <img src={icon} alt="" />
            <span>
              {data}{" "}
              {isSize && (
                <>
                  M<sup>2</sup>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
