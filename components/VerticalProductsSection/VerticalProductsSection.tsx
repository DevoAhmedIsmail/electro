import React from 'react'
import Container from '../Container'
import VerticalProduct from './VerticalProduct'
import { HotProducts, NewProducts, Recommendations } from '@/data/ProductsSections'
import Image from 'next/image'
import Link from 'next/link'

const VerticalProductsSection = () => {
  return (
    <Container>
        <div className='pt-12 pb-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            <VerticalProduct title="Featured products" products={NewProducts} />
            <VerticalProduct title="Onsale Products" products={HotProducts} />
            <VerticalProduct title="Top Rated Products" products={Recommendations} />
            <Link href="/">
              <Image src="/images/panners/v2-right-1.jpg" alt='panner' width={330} height={360} objectFit='contain' />
            </Link>
            {/* <VerticalProduct /> */}
          </div>
        </div>
    </Container>
  )
}

export default VerticalProductsSection