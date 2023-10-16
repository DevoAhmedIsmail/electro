import { cartData } from '@/types/productsType'
import React from 'react'
import SidebarCartMenuItem from './SidebarCartMenuItem'

type CartMenuProps = {
    cartData: cartData[],
    handelClose: () => void
}

const SidebarCartMenu = ({cartData,handelClose}: CartMenuProps) => {
  return (
    <div className='flex flex-col divide-y-2'>
        {
            cartData.map(item=>(
                <SidebarCartMenuItem cartItem ={item} key={item.id} handelClose={handelClose} />
            ))
        }
    </div>
  )
}

export default SidebarCartMenu