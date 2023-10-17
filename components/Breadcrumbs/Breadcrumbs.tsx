import Link from "next/link";
import React from "react";

const Breadcrumbs = ({
  category,
  currentTitle,
}: {
  category?: string;
  currentTitle: string;
}) => {
  return (
    <div className="text-sm text-[var(--textColor)] flex items-center gap-1">
      <Link href="/" className="hover:text-[var(--yellowColor)]">Home</Link>
      /
      {
        category && (
          <>
            <Link href={`/category/${category}`} className="hover:text-[var(--yellowColor)]">{category}</Link>
            / 
          </>
        )
      }
      
      <p>{currentTitle}</p>
    </div>
  );
};

export default Breadcrumbs;
