import React from "react";
import Container from "../Container";
import ProductSectionHeader from "../ProductSection/ProductSectionHeader";
import Image from "next/image";
import Link from "next/link";

const Tips = () => {
  return (
    <Container>
      <Link href="/" className="py-6">
        <ProductSectionHeader title="Tips & Inspirations" />
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 text-[var(--textColor)] mt-5">
          <div className="flex-1 rounded-xl overflow-hidden hover:shadow-xl transition px-2 md:p-5">
            <div className="relative w-full h-[350px] ">
              <Image
                src="/images/tip/tip01.webp"
                alt="tips"
                fill
                objectFit="cover"
                className="rounded-xl "
              />
            </div>
            <div className="px-3 md:px-3 py-5">
              <p className="font-semibold">Sep 15, 2020</p>
              <p className="font-semibold text-lg my-4">Space X Falcon</p>
              <p className="text-[var(--softTextColor)] text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                minima quia? Obcaecati sint iste rem nisi ab minus voluptatibus
                harum? Quos doloribus quis sapiente, dolores sint officia eos?
                Quasi, placeat tempore? Neque modi veniam fuga, eum praesentium
                at facilis dignissimos.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-xl overflow-hidden hover:shadow-xl transition px-2 md:p-5">
            <div className="relative w-full h-[350px] ">
              <Image
                src="/images/tip/tip02.webp"
                alt="tips"
                fill
                objectFit="cover"
                className="rounded-xl "
              />
            </div>
            <div className="px-3 md:px-3 py-5">
              <p className="font-semibold">Sep 15, 2020</p>
              <p className="font-semibold text-lg my-4">Coffe Time in Office</p>
              <p className="text-[var(--softTextColor)] text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                minima quia? Obcaecati sint iste rem nisi ab minus voluptatibus
                harum? Quos doloribus quis sapiente, dolores sint officia eos?
                Quasi, placeat tempore? Neque modi veniam fuga, eum praesentium
                at facilis dignissimos.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default Tips;
