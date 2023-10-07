import { ProductsType } from '@/types/productsType'
import React from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductDetails from '../ProductDetails/ProductDetails'
import ProductCheckout from '../ProductCheckout/ProductCheckout'

const ProductWrapper = ({productData}: {productData: ProductsType}) => {
  return (
    <div className='flex flex-col min-[1080px]:flex-row mt-8'>
        <div className="flex-1 flex flex-col md:flex-row w-full">
            <div className="w-full md:w-[56%]"><ProductImage imageSrc={productData.imgSrc} /></div>
            <div className="w-full md:w-[44%]"><ProductDetails productData={productData} /></div>
        </div>
        <div className="w-full min-[1080px]:w-[25%]"><ProductCheckout productData={productData} /></div>
    </div>
  )
}

export default ProductWrapper