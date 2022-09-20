import React,{useState} from 'react'

export default function NavbarSearchbtn() {
    const [isVisible,setIsVisible]=useState(false)
    const searchbuttonHandler = () => {
        setIsVisible(!isVisible);
      };
  return (
    <>
    <button >
    <svg
      onClick={searchbuttonHandler}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 14L10.9306 10.9252L14 14ZM12.6316 6.81579C12.6316 8.35823 12.0188 9.8375 10.9282 10.9282C9.8375 12.0188 8.35823 12.6316 6.81579 12.6316C5.27335 12.6316 3.79408 12.0188 2.70341 10.9282C1.61273 9.8375 1 8.35823 1 6.81579C1 5.27335 1.61273 3.79408 2.70341 2.70341C3.79408 1.61273 5.27335 1 6.81579 1C8.35823 1 9.8375 1.61273 10.9282 2.70341C12.0188 3.79408 12.6316 5.27335 12.6316 6.81579V6.81579Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>
    {isVisible && (
        <input
          className=" text-black absolute px-2 mt-9 px-8 py-2 max-nav:ml-24 max-nav:bottom-2 max-nav:left-[40px] right-[60px]"
          type="text"
          placeholder="Search..."
        />
      )}</>
  )
}