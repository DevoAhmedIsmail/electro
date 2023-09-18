import React from 'react'
import ClientOnly from '../ClientOnly'
import HeaderSlider from './HeaderSlider/HeaderSlider'

const Header = () => {
  return (
    <ClientOnly>
        <div className='bg-[var(--bgHeader)]'>
            
        <HeaderSlider />
        </div>
    </ClientOnly>
  )
}

export default Header