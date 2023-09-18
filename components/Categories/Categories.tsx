import React from 'react'
import Container from '../Container'
import Category from './Category'

const dataCategories = [
  {
    id: 1,
    title: "Stero",
    imgSrc: "/images/products/printer01.webp",
    href:"/",
    count: 24
  },
  {
    id: 2,
    title: "Phones",
    imgSrc: "/images/products/phone03.png",
    href:"/",
    count: 8
  },
  {
    id: 3,
    title: "Bluetooth Speakers",
    imgSrc: "/images/products/speaker02.webp",
    href:"/",
    count: 14
  },
  {
    id: 4,
    title: "Headphones",
    imgSrc: "/images/products/headphone01.webp",
    href:"/",
    count: 5
  },
  {
    id: 5,
    title: "Speakers",
    imgSrc: "/images/products/speaker01.png",
    href:"/",
    count: 3
  },
]

const Categories = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16 pt-32 pb-6'>
        {
          dataCategories.map(category=> (
            <Category key={category.id} category={category} />
          ))
        }
      </div>
    </Container>
  )
}

export default Categories