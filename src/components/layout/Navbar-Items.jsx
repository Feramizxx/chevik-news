import { NavLink } from 'react-router-dom'


export default function Navbar({ className }) {
  return (
    <div className={`text-white mt-3 lg:flex items-center justify-evenly absolute lg:static left-0 bg-primary-card w-full p-3 lg:bg-inherit ${className}`}>
      <NavLink to={'/'} className="navlink lg:p-0"><span>Əsas</span><span className="ml-2">xəbərlər</span> </NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Təhsil</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Siyasət</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">İqtisadiyyat</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Cəmiyyət </NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">İdman</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Mədəniyyət</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Dünya</NavLink>
      <NavLink to={"/rublicmain"} className="navlink lg:p-0">Rublikalar</NavLink>
    </div >
  )
}