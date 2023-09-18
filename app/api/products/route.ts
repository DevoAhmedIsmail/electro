import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

type ProductBody = {
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  colors: string;
};

export async function POST(req: Request) {
  const body: ProductBody = await req.json();
  console.log(body);
  const { title, description, image, category, price, colors } = body;
//   let colorsArr = colors.split(',');

  const product = await prisma.products.create({
    data: {
      title,
      description,
      image,
      category,
      price: Number(price),
      
    },
  });

  // const todo = await prisma.todo.create({

  // })
  return NextResponse.json(product);
}
