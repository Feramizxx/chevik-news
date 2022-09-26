import HeaderNav from "./Header-nav";
import HeaderBar from "./Header-bar";
const Header = () => {
  return (
    <div className="fixed z-40 w-full mb-24 top-0">
      <HeaderBar />
      <HeaderNav />
    </div>
  )
}


export default Header;