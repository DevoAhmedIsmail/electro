import { HotProducts } from "@/data/ProductsSections";
import { NextResponse } from "next/server";

type ParamsProps = {
    params: {
        productId: number
    }
}

export async function GET(req: Request, {params}: ParamsProps) {
    const { productId } = params;
  const products = HotProducts.find((product) => product.id === Number(productId));

  return NextResponse.json(products);
}