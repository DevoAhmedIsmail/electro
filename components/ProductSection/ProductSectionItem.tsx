import { ProductsType } from "@/types/productsType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";




const ProductSectionItem = ({ product }: { product: ProductsType }) => {
  return (
    <ProductCard product={product} />
  );
};

export default ProductSectionItem;
