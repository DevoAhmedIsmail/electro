import useSideBarCart from '@/hooks/useSidebarCart'
import { cartData } from '@/types/productsType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CartMenuItemProps = {
    cartItem: cartData,
    handelClose: () => void
}

const SidebarCartMenuItem = ({cartItem,handelClose}: CartMenuItemProps) => {
  return (
    <div className='flex gap-4 py-6'>
        <Link href={`/product/${cartItem.id}`} onClick={handelClose}>
            <Image src={cartItem.imgSrc} alt={cartItem.brand} width={70} height={70} className='object-contain' />
        </Link>

        <div className='space-y-1 flex-1'>
            <Link href={`/product/${cartItem.id}`} className='text-[#0062bd] font-bold text-[14px]' onClick={handelClose}>{cartItem.title}</Link>  
            <p className='text-[14px]'>QTY: {cartItem.quantity}</p>  
            <div className='flex items-center justify-between'>
                <p>${cartItem.price}</p>
                <p className='text-[13px] underline text-[#086479] font-semibold cursor-pointer'>Remove</p>
            </div>
        </div>
    </div>
  )
}

export default SidebarCartMenuItem