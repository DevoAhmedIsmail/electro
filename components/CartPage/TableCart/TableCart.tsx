"use client"

import { cartData } from "@/types/productsType"
import "./TableCart.css"
import TableHeader from "./TableHeader"
import TableItem from "./TableItem"
import Button from "@/components/Button/Button"
import { useRouter } from "next/navigation";
import { useState } from "react"


const TableCart = ({cartProducts}: {cartProducts: cartData[]}) => {
  const router = useRouter();
  const [loadingHomePage, setLoadingHomePage] = useState(false);

  const handleContinueShopping = () => {
    setLoadingHomePage(true);
    router.push("/");
  }

  return (
    <div className="mt-4">
        <TableHeader />
        {
            cartProducts.map(cartItem=>(
                <TableItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="flex items-center justify-end flex-col min-[787px]:flex-row gap-4 mt-4">
          <Button text="Continue Shopping" secondary classes="max-[787px]:w-full" clickHandler={handleContinueShopping} isLoading={loadingHomePage} />
          <Button text="Clear Cart" primary classes="max-[787px]:w-full"  />
        </div>

    </div>
  )
}

export default TableCart