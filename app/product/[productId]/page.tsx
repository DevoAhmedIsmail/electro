import Container from '@/components/Container'
import Newsletter from '@/components/Newsletter/Newsletter'
import Partners from '@/components/Partners/Partners'
import VerticalProductsSection from '@/components/VerticalProductsSection/VerticalProductsSection'
import React from 'react'

type ParamsProps = {
    params: {
        productId: string
    }
}

const ProductPage = ({params}: ParamsProps) => {
    console.log(params.productId);
    
  return (
    <main className='bg-[var(--bgMode)] py-8'>
        <Container>
            Product {params.productId}
            
            <VerticalProductsSection />
            <Partners />
            <Newsletter />
        </Container>
    </main>
  )
}

export default ProductPage