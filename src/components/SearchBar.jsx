import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center gap-2 p-2 bg-[#F5F5F5] rounded-xl w-fit'>
      <MagnifyingGlass className='opacity-50' size={16} weight="bold" />
      <input type="text" className='focus:outline-none text-sm font-medium' placeholder='Search'>
      </input>
    </div>
  )
}

export default SearchBar
