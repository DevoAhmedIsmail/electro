import React from "react";

const ProductSectionHeader = ({title, small}: {title: string, small?:boolean}) => {
  return (
    <div className="border-b">
      <h1 className={`capitalize ${small ? "text-[20px]" : "text-2xl"} text-[var(--textColor)] pb-3 relative inline-block after:content-[''] after:bottom-0 after:left-0 after:inline-block after:absolute  after:w-full after:h-[2px] after:bg-[var(--yellowColor)]`}>
        {title}
      </h1>
    </div>
  );
};

export default ProductSectionHeader;
