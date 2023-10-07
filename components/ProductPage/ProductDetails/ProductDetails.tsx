"use client"

import { ProductsType } from '@/types/productsType'
import React from 'react'
import { usePathname } from 'next/navigation'
import ShareButton from '@/components/ShareButton/ShareButton'
import {TbTruckDelivery} from "react-icons/tb"


const ProductDetails = ({productData}: {productData: ProductsType}) => {
  const pathname = usePathname()
  return (
    <div className='pr-5 text-[var(--textColor)]'>
      <p className='text-sm text-[var(--softTextColor)]'>{productData.brand}</p>
      <p className='text-[var(--textColor)] text-2xl capitalize'>{productData.title}</p>

      <div className='flex items-center gap-2 mt-2 pb-4'>
        <ShareButton link={pathname} shareWith='facebook' />
        <ShareButton link={pathname} shareWith='twitter' />
      </div>
      
      <div className=' border-y border-[#dddddd] py-4'>
        <p className='text-[var(--softTextColor)] text-[14px] leading-6'>{productData.description}</p>
      </div>

      <div className='text-sm space-y-2 py-4'>
        <p className='flex items-center gap-2'>
          <TbTruckDelivery size={32} className="animate-bounce text-[var(--yellowColor)]" /> 
          <p>Want it delivered by <span className='font-bold'>Tuesday, 10 October</span></p>
        </p>
        <p>Order until <span className='text-[var(--yellowColor)] font-semibold'>14:00 tomorrow</span></p>
      </div>
    </div>
  )
}

export default ProductDetails