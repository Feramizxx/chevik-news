import React from 'react'
import NavbarItems from './Navbar-Items'
import NavbarSearchbtn from './NavbarSearchbtn'

export default function Navbar() {
  return (
    <ul
    className="w-full text-white mt-3 flex flex-row"
  >
    <NavbarItems />
  </ul>
  )
}
