import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Container from '@/components/Container'
import Newsletter from '@/components/Newsletter/Newsletter'
import Partners from '@/components/Partners/Partners'
import ProductWrapper from '@/components/ProductPage/ProductWrapper/ProductWrapper'
import ProductSection from '@/components/ProductSection/ProductSection'
import VerticalProductsSection from '@/components/VerticalProductsSection/VerticalProductsSection'
import { NewProducts } from '@/data/ProductsSections'
import axios from 'axios'


type ParamsProps = {
    params: {
        productId: string
    }
}

const fetchData = async (id: number)=>{
    const productData = await axios.get(`http://127.0.0.1:3000/api/product/${id}`);
    const product = productData.data
    return productData
}

const ProductPage = async({params}: ParamsProps) => {
    console.log(params.productId);
    let product = null
    if(params.productId){
        const fetchedData = await fetchData(Number(params.productId))
        product = fetchedData?.data
    }

    if(product === null){
        return <div>Loading</div>
    }
    
  return (
    <main className='bg-[var(--bgMode)] py-8'>
        <Container>
            <Breadcrumbs category={product?.category} currentTitle={product.title} />
            <ProductWrapper productData = {product} />
        </Container>

        <ProductSection title="Related Products" products={NewProducts} />
        <VerticalProductsSection />
        <Partners />
        <Newsletter />
    </main>
  )
}

export default ProductPage