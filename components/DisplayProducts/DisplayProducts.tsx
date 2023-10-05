"use client"

import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Recommendations } from '@/data/ProductsSections'
import FilterBar from '../Filters/FilterBar'

type DisplayProductsProps = {
    slug: string
}

const DisplayProducts = ({slug}: DisplayProductsProps) => {
  return (
    <div>
        <p className='capitalize text-3xl mb-4'>{slug}</p>
        <FilterBar />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                Recommendations.map(product=>(
                    <ProductCard product={product} key={product.id}  />
                ))
            }
        </div>
    </div>
  )
}

export default DisplayProducts