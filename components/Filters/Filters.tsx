"use client"

import React, { useState } from 'react'
import FilterItem from './FilterItem'
import PuffLoader from "react-spinners/PuffLoader"

import "./Filter.css"
import { filterOptionsData } from '@/data/filters'





const Filters = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false); // Update isLoading when the operation is complete
  }, 2000); 

  return (
    <div className="border rounded-md mt-3">

      {
        isLoading ? (
          <div className='flex items-center justify-center py-4'>
            <PuffLoader size={28} color="#fed700"  />
          </div>
        ) : (
          <div className='px-2 py-4 flex flex-col gap-8'>
            <FilterItem title='brand' options={filterOptionsData.brand} isLoading={isLoading} setIsLoading={setIsLoading} />
            <FilterItem title='color' options={filterOptionsData.color} color isLoading={isLoading} setIsLoading={setIsLoading} />
            <FilterItem title='size' options={filterOptionsData.size}  isLoading={isLoading} setIsLoading={setIsLoading} />
          </div>
        )
      }
      
    </div>
    )
}

export default Filters