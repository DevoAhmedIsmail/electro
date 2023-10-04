"use client"

import React, { useState } from 'react'
import FilterItem from './FilterItem'
import PuffLoader from "react-spinners/PuffLoader"

import "./Filter.css"

const filterOptionsData = {
  brand: [
    {
      name: "Apple",
      slug: "apple",
    },
    {
      name: "Samsung",
      slug: "samsung",
    },
    {
      name: "Xiaomi",
      slug: "xiaomi",
    }
  ],
  color: [
    {
      name: "Black",
      slug: "black",
      hexColor: "#000000"
    },
    {
      name: "White",
      slug: "white",
      hexColor: "#ffffff"
    },
    {
      name: "Red",
      slug: "red",
      hexColor: "#ff0000"
    },
    {
      name: "Green",
      slug: "green",
      hexColor: "#00ff00"
    },
    {
      name: "Blue",
      slug: "blue",
      hexColor: "#0000ff"
    },
    {
      name: "Yellow",
      slug: "yellow",
      hexColor: "#ffff00"
    }
  ],
  size: [
    {
      name: "Medium",
      slug: "medium",
    },
    {
      name: "Large",
      slug: "large",
    },
    {
      name: "Small",
      slug: "small",
    },
    {
      name: "Extra Large",
      slug: "extra-large",
    }
  ]
}



const Filters = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false); // Update isLoading when the operation is complete
  }, 2000); 
  return (
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
    
  )
}

export default Filters