import React from "react";
import ProductSectionHeader from "../ProductSection/ProductSectionHeader";
import { ProductsType } from "@/types/productsType";
import Image from "next/image";
import Link from "next/link";

const VerticalProduct = ({
  title,
  products,
}: {
  title: string;
  products: ProductsType[];
}) => {
  return (
    <div>
      <ProductSectionHeader title={title} small />
      <div className="flex flex-col gap-8 py-8">
        {products.slice(0, 3).map((product) => (
          <Link href="/" key={product.id} className="flex gap-5">
            <div className="">
              <Image
                src={product.imgSrc}
                alt="product"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">

              <p className="text-[#0062bd] font-semibold mb-2">{product.title}</p>

              <div className="flex-center gap-3">
                <p
                  className={`text-base ${
                    product.discount
                      ? "text-[var(--priceSaleColor)]"
                      : "text-[var(--textColor)]"
                  }`}
                >
                  ${product.price}
                </p>

                {product.discount && (
                  <p className="text-sm line-through text-[var(--softTextColor)]">
                    ${product.oldPrice}
                  </p>
                )}

              </div>

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default VerticalProduct;
