import React from "react";

const Badge = ({ num }: { num: number }) => {
  return (
    <div className="w-5 h-5 bg-[var(--yellowColor)] text-[#333e48] rounded-full absolute bottom-[-6px] right-[-8px] flex-center justify-center text-[11px] font-semibold">
      {num}
    </div>
  );
};

export default Badge;
