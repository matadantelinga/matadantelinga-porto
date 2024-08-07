import { ICategorySelectOption } from "@/lib/interfaces/icategory";
import React from "react";

interface ISearchSelectionProps {
  label: string;
  labelOption: string;
  options: ICategorySelectOption[];
  handleSelect: (option: string) => void;
}
export const SearchSelection: React.FC<ISearchSelectionProps> = ({
  label,
  labelOption,
  options,
  handleSelect,
}) => {
  return (
    <>
      <div className="selection-btn ml-2">
        <label className="font-bold block">{label}</label>
        <select onChange={(e) => handleSelect(e.target.value)}>
          <option>{labelOption}</option>
          {options?.length > 0 &&
            options.map((option) => (
              <option key={option.id} value={option.attributes.slug}>
                {option.attributes.title}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};
