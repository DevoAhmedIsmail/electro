import Brands from "@/components/Brands/Brands";
import Categories from "@/components/Categories/Categories";
import Header from "@/components/Header/Header";
import Newsletter from "@/components/Newsletter/Newsletter";
import Panners from "@/components/Panners/Panners";
import Partners from "@/components/Partners/Partners";
import ProductSection from "@/components/ProductSection/ProductSection";
import Tips from "@/components/Tips/Tips";
import VerticalProductsSection from "@/components/VerticalProductsSection/VerticalProductsSection";
import {
  HotProducts,
  NewProducts,
  Recommendations,
} from "@/data/ProductsSections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[var(--bgMode)]">
      <Header />
      <Categories />
      <ProductSection title="Hot Products Today" products={HotProducts} />
      <Panners />
      <ProductSection title="New Products" products={NewProducts} />
      <ProductSection title="Recommendations" products={Recommendations} />
      <Tips />
      <Brands />
      <VerticalProductsSection />
      <Partners />
      <Newsletter />
    </main>
  );
}
