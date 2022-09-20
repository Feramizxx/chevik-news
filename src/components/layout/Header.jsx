import HeaderNav from "./Header-nav";
import HeaderBar from "./Header-bar";
const Header = () => {
  return (
    <div className="fixed z-50 w-full mb-24">
      <HeaderBar />
      <HeaderNav />
    </div>
  )
}


export default Header;