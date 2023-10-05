import Container from '@/components/Container'
import DisplayProducts from '@/components/DisplayProducts/DisplayProducts'
import Filters from '@/components/Filters/Filters'
import ProductSectionHeader from '@/components/ProductSection/ProductSectionHeader'
import React from 'react'

type ParamsProps = {
    params: {
        slug: string
    }
}

const Category = ({params}: ParamsProps) => {
    // console.log(params);
    
  return (
    <main className='bg-[var(--bgMode)] py-8'>
        <Container>
        <div className='flex justify-between gap-8'>
            <div className="hidden lg:block w-[20%] ">
                <ProductSectionHeader title='Filters' />
                <Filters />
            </div>
            <div className="w-full lg:w-[80%]">
                <DisplayProducts slug={params.slug} />
            </div>
        </div>
        </Container>
    </main>
  )
}

export default Category