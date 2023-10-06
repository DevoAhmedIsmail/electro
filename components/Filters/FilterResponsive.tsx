import {useState} from 'react'
import {VscSettings} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'
import ProductSectionHeader from '../ProductSection/ProductSectionHeader'
import FilterItem from './FilterItem'
import { filterOptionsData } from '@/data/filters'

export const FilterResponsive = () => {
  const [showSideFilter, setShowSideFilter] = useState(false)
  return (
    <div className='relative'>
      <div
        className='flex items-center gap-2 text-sm cursor-pointer text-[var(--textColor)] font-semibold'
        onClick={()=> setShowSideFilter(!showSideFilter)}
      >
        <VscSettings size={20}/>
        <p>Filter</p>
      </div>


          <div className={`fixed ${showSideFilter ? "translate-x-0" : "translate-x-[-100%]"}  left-0 top-0  h-screen overflow-y-auto w-[100%] bg-[var(--bgMode)] z-[999] transition duration-300 ease-in-out`}>
            <div
              className='w-8 h-8 bg-[var(--bgCategory)] rounded-full flex items-center justify-center border absolute top-3 right-3 cursor-pointer'
              onClick={()=> setShowSideFilter(false)}
            >
              <AiOutlineClose className="font-bold text-[var(--textColor)]" />
            </div>

            {/* content */}
            <div className='px-5 py-10'>
              <ProductSectionHeader title='Filter' />

              <div className='px-2 py-4 flex flex-col gap-8'>
                <FilterItem title='brand' options={filterOptionsData.brand} sideFilterCloseHandler={setShowSideFilter}  />
                <FilterItem title='color' options={filterOptionsData.color} sideFilterCloseHandler={setShowSideFilter} color  />
                <FilterItem title='size' options={filterOptionsData.size} sideFilterCloseHandler={setShowSideFilter}   />
              </div>
            </div>
          </div>

    </div>
  )
}
