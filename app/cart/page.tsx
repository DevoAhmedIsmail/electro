import React from 'react'
import Container from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import TableCart from '@/components/CartPage/TableCart/TableCart'

import { cartProducts } from '@/data/ProductsSections'

const CartPage = () => {
  return (
    <main className='bg-[var(--bgMode)] py-8 text-[var(--textColor)]'>
      <Container>
        <Breadcrumbs currentTitle='Shopping Cart' />
        <h1 className='text-4xl text-center py-5'>Shopping Cart</h1>

        <TableCart cartProducts={cartProducts} />
      </Container>
    </main>
  )
}

export default CartPage