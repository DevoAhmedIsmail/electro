"use client";

import React from "react";

type OptionsProps = {
  optionType: string;
  optionData: string[];
};

const ProductOptions = ({ optionType, optionData }: OptionsProps) => {
  const [selectedOption, setSelectedOption] = React.useState<string>(
    optionData[0]
  );
  return (
    <div>
      <p className="capitalize text-[var(--softTextColor)] mb-2">
        {optionType}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        {optionData.map((option, index) => (
          <div
            key={index}
            className={`
                        w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border-2 font-semibold text-sm
                        ${selectedOption === option ? "border-[var(--yellowColor)]" : "border-[var(--softTextColor)]" }
                    `}
                    
            style={optionType === "color" ? { backgroundColor: option } : {}}
            onClick={() => setSelectedOption(option)}
          >
            {optionType === "size" ? option : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;
