import React from 'react'

const TableHeader = () => {
  return (
    <div className='hidden min-[787px]:flex items-center border-b'>
        <div className="table_column table_column-1"></div>
        <div className="table_column table_column-2 text-sm">Product</div>
        <div className="table_column table_column-3 text-sm text-center">Price</div>
        <div className="table_column table_column-4 text-sm text-center">Quantity</div>
        <div className="table_column table_column-5 text-sm text-center">Total</div>
    </div>
  )
}

export default TableHeader