import { ReactComponent as Search } from '../../assets/icons/search.svg';
import React, { useState } from 'react'

export default function NavbarSearchbtn() {
  const [isVisible, setIsVisible] = useState(false)

  const searchbuttonHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <ul className='z-10'>
        <li> <Search className='clickable' onClick={searchbuttonHandler} /> </li>
        <li>
          {isVisible &&
            <input
              className=" text-black absolute mb-[-1em] lg:mt-4 ml-[-7.5rem] px-8 py-2 max-nav:bottom-2"
              type="text"
              placeholder="Search..."
            />
          }
        </li>
      </ul>
    </>
  )
}