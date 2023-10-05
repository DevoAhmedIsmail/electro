import React from 'react'
import { FilterResponsive } from '@/components/Filters/FilterResponsive'

const FilterBar = () => {
    const [selectedSort, setSelectedSort] = React.useState('alphabet-ascending')

  return (
    <div className='bg-[var(--bgCategory)] flex justify-between items-center py-2 px-3 rounded-lg'>
            <div className="block lg:hidden">
                <FilterResponsive />
            </div>
            <div>
                <div className='bg-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm'>
                    <p>Sort by</p>
                    <select className='border-none outline-none' onChange={(e)=> setSelectedSort(e.target.value) } value={selectedSort}>
                        <option value="alphabet-ascending">Alphabetically, A-Z</option>
                        <option value="alphabet-descending">Alphabetically, Z-A</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="price-ascending">Price, low to high</option>
                        <option value="price-descending">Price, high to low</option>

                    </select>
                </div>
            </div>
        </div>
  )
}

export default FilterBar