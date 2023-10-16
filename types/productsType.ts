export type ProductsType = {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  brand: string;
  category?: string;
  description?: string;
};

export type cartData = {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  oldPrice?: number;
  discount: number;
  brand: string;
  category: string;
  description: string;
  quantity: number;
}