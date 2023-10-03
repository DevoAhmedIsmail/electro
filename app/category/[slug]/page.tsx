import Container from '@/components/Container'
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
    <main>
        <Container>
        <div className='flex justify-between gap-8'>
            <div className="w-[20%] ">
                <ProductSectionHeader title='Filters' />
                <div className="border rounded-md mt-3">
                    <Filters />
                </div>
            </div>
            <div className="w-[80%] bg-violet-500">2</div>
        </div>
        </Container>
    </main>
  )
}

export default Category