import React from "react";
import Container from "../Container";
import ProductSectionHeader from "../ProductSection/ProductSectionHeader";
import BrandCard from "./BrandCard";

const dataBrand = [
  {
    id: 1,
    href: "/",
    brandImg: "/images/brands/falcon.png",
    productImg: "/images/brands/brand-1-1.webp",
    description:
      "Brings you the best in music, plus all things culture, style, and sports",
  },
  {
    id: 2,
    href: "/",
    brandImg: "/images/brands/brand.png",
    productImg: "/images/brands/brand-2-1.webp",
    description:
      "Brings you the best in music, plus all things culture, style, and sports",
  },
  {
    id: 3,
    href: "/",
    brandImg: "/images/brands/pathway.png",
    productImg: "/images/brands/brand-3-1.avif",
    description:
      "Brings you the best in music, plus all things culture, style, and sports",
  },
  {
    id: 4,
    href: "/",
    brandImg: "/images/brands/atmosphere.png",
    productImg: "/images/brands/brand-4-1.png",
    description:
      "Brings you the best in music, plus all things culture, style, and sports",
  },
  {
    id: 5,
    href: "/",
    brandImg: "/images/brands/sportex.png",
    productImg: "/images/brands/brand-5-1.avif",
    description:
      "Brings you the best in music, plus all things culture, style, and sports",
  },
];

const Brands = () => {
  return (
    <Container>
      <div className="py-6">
        <ProductSectionHeader title="Known Brands" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {dataBrand.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Brands;
