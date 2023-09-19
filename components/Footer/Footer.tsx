import React from 'react'
import Container from '../Container'
import LogoImg from '../Navbar/LogoImg'

import {TfiHeadphoneAlt} from "react-icons/tfi"
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-[var(--bgFooter)] text-[var(--textColor)] py-8'>
      <Container>
        <div className='flex items-center justify-between flex-col lg:flex-row'>
          {/* Logo (section 1) */}
          <div className='flex items-start flex-col gap-4'>
            <LogoImg />

            <div className='flex items-center gap-5'>
              <TfiHeadphoneAlt size={48} className="text-[var(--yellowColor)]" />
              <div>
                <p className='text-sm text-[var(--softTextColor)]'>Got questions? Call us 24/7!</p>
                <p className=''>(800) 8001-8588, (0600) 874 548</p>
              </div>
            </div>
            
            <div>
              <p className='font-semibold'>Contact info</p>
              <p className='text-sm'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>

            <div className='flex flex-center gap-4'>
              <FaFacebookF size={24} className="hover:text-[var(--priceSaleColor)] transition-colors cursor-pointer"  />
              <FaTwitter size={24} className="hover:text-[var(--priceSaleColor)] transition-colors cursor-pointer"  />
              <FaInstagram size={24} className="hover:text-[var(--priceSaleColor)] transition-colors cursor-pointer"  />
              <FaWhatsapp size={24} className="hover:text-[var(--priceSaleColor)] transition-colors cursor-pointer"  />
            </div>

          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer