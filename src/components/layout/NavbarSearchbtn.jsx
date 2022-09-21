import React, { useState } from 'react'
import { ReactComponent as Search } from '../../assets/icons/search.svg';

export default function NavbarSearchbtn() {
  const [isVisible, setIsVisible] = useState(false)

  const searchbuttonHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button >
        <Search onClick={searchbuttonHandler} />
      </button>
      {isVisible && (
        <input
          className=" text-black absolute mt-9 px-8 py-2 max-nav:ml-24 max-nav:bottom-2 max-nav:left-[40px] right-[60px]"
          type="text"
          placeholder="Search..."
        />
      )}</>
  )
}
