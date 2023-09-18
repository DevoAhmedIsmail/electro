import React from "react";
import Container from "../Container";
import ProductSectionHeader from "./ProductSectionHeader";
import ProductSectionItem from "./ProductSectionItem";
import { ProductsType } from "@/types/productsType";
1;

const ProductSection = ({
  title,
  products,
}: {
  title: string;
  products: ProductsType[];
}) => {
  return (
    <Container>
      <div className="py-6">
        <ProductSectionHeader title={title} />

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {products.map((product) => (
            <ProductSectionItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductSection;
