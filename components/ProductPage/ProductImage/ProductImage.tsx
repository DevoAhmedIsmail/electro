import Image from 'next/image'
import React from 'react'

const ProductImage = ({imageSrc}: {imageSrc: string}) => {
  return (
    <div className='relative w-full h-64 md:h-96'>
      <Image src={imageSrc} alt='product' fill className='object-contain' />
    </div>
  )
}

export default ProductImage