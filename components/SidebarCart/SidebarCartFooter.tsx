import Link from 'next/link'
import React from 'react'

type SidebarCartFooterProps = {
  handelClose: () => void
}

const SidebarCartFooter = ({handelClose}: SidebarCartFooterProps) => {
  return (
    <div className='flex flex-col gap-4 px-6 py-4'>
      <div className='flex items-center justify-between pt-4 border-t'>
        <p>Cart total</p>
        <p className='font-bold'>$20.00</p>
      </div>
      <div className='space-y-4'>
        <Link onClick={handelClose} href="/cart" className='w-full h-12 rounded-full flex items-center justify-center bg-[var(--softBg)] font-bold text-[14px]'>
          View Cart
        </Link>
        <Link onClick={handelClose} href="/cart" className='w-full h-12 rounded-full flex items-center justify-center bg-[var(--yellowColor)] text-white font-bold text-[14px]'>
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default SidebarCartFooter