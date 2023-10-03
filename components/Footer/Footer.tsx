import React from 'react'
import Container from '../Container'
import LogoImg from '../Navbar/LogoImg'

import {TfiHeadphoneAlt} from "react-icons/tfi"
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from "react-icons/fa"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-[var(--bgFooter)] text-[var(--textColor)] py-8'>
      <Container>
        <div className='flex justify-between flex-wrap gap-y-8'>
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

          {/* Links */}
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>Find In Fast</p>
            <div className='flex flex-col gap-3'>
              <Link href="/" className='text-sm hover:font-semibold transition'>Accessories</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Gaming</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Laptops & Computer</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Mac Computers</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>PC Computers</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Ultrabooks</Link>
            </div>
          </div>
          
          {/* Links */}
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>Information</p>
            <div className='flex flex-col gap-3'>
              <Link href="/" className='text-sm hover:font-semibold transition'>About Us</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Contact Us</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>All Collections</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Privacy policy</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Terms & Conditions</Link>
            </div>
          </div>

          {/* Links */}
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>Customer Care</p>
            <div className='flex flex-col gap-3'>
              <Link href="/" className='text-sm hover:font-semibold transition'>Wishlist</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Shopping Cart</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Shipping & Return</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>FAQs</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Ultrabooks</Link>
            </div>
          </div>

          {/* Links */}
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>In the Spotlight</p>
            <div className='flex flex-col gap-3'>
              <Link href="/" className='text-sm hover:font-semibold transition'>Electronics</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Toys</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Video Games</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Home Products</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Clothing</Link>
              <Link href="/" className='text-sm hover:font-semibold transition'>Sports & Outdoors</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer