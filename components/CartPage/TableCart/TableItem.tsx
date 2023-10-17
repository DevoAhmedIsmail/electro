"use client"

import { cartData } from '@/types/productsType'
import Image from 'next/image'
import React, { useState } from 'react'

import { GrClose } from 'react-icons/gr'
import Quantity from './Quantity'
import Button from '@/components/Button/Button'

const TableItem = ({cartItem}: {cartItem: cartData}) => {
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const handleQuantity = (action: string) => {
        if(action === "add"){
            setQuantity(quantity + 1)
        }else {
            if(quantity > 1){
                setQuantity(quantity - 1)
            }
        }
    }

    // TODO: useEffect for post the new quantity to the DB

  return (
    <div className='flex items-start min-[787px]:items-center flex-col min-[787px]:flex-row border-b'>
        <div className="table_column_item table_column-1 hidden min-[787px]:block"><GrClose className=" cursor-pointer" /></div>
        <div className="table_column_item table_column-2">
            <div className='flex items-start min-[787px]:items-center gap-4'>
                <div>
                    <Image src={cartItem.imgSrc} alt={cartItem.title} width={90} height={82} className='object-contain' /> 
                </div>
                <div className='flex flex-col flex-1'>
                    <p className='mb-2'>{cartItem.title}</p>
                    <p className='text-sm text-[var(--softTextColor)]'>Size: M</p>
                    <p className='text-sm text-[var(--softTextColor)]'>Color: Brown</p>
                    <p className="block min-[787px]:hidden py-4">${cartItem.price}</p>

                    <div className="block min-[787px]:hidden">
                        <Quantity quantity={quantity} handleQuantity={handleQuantity} />
                    </div>

                    <Button text="Remove" secondary fit classes="block min-[787px]:hidden mt-4 text-[14px] py-[10px] px-[25px]" />
                </div>
            </div>
        </div>

        <div className="table_column_item table_column-3 text-center hidden min-[787px]:block">${cartItem.price}</div>

        <div className="table_column_item table_column-4 text-center hidden min-[787px]:block">
            <Quantity quantity={quantity} handleQuantity={handleQuantity} />
        </div>

        <div className="table_column_item table_column-5 text-center hidden min-[787px]:block">${cartItem.price * quantity}</div>
    </div>
  )
}

export default TableItem