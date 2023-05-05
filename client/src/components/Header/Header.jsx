import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useLocation } from 'react-router-dom'
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
// import Category from "../Home/Category/Category";
// import {HashLink as link} from "react-router-hash-link"
import { useAuth0 } from "@auth0/auth0-react";
import Dropdown from "./dropdown";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [cat,setcat]=useState(false);
  const navigate = useNavigate();
  // const cate=useRef(<Category/>);

  // const scroll_to_section=(elementRef)=>{
  //     window.scrollTo({
  //         top: elementRef.current.offsetTop,
  //         behavior:'smooth'
  //     })
  // }
  const handleScroll = () => {
    //scroll amount
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === '/success') {
//       // Auto-click the button
//       document.getElementById('xyz').click();
//     }
//  },[location]);
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const showit=()=>{
    console.log(user)
    if(!cat){
      setcat(true);
    }
    else if(cat){
      setcat(false);
    }
  }
  const { logout } = useAuth0();

  // const out=()=>{
  //   console.log("logout");
  //   logout();
  // }
  const log = () => {
    console.log("clicked");
    loginWithRedirect();
  };
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, showCart, setShowCart } = useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            {
              cat?(<><li onClick={() => showit()}>Categories</li> <Dropdown/></>):( <li onClick={() => showit()}>Categories</li>)
            }
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            E-MPORIUM
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
            <AiOutlineHeart onClick={()=>navigate('/myorder')} />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            {
                isAuthenticated?(<span>{user.nickname}</span>):(<span></span>)
            }
          </div>
        </div>
        {isAuthenticated ? (
          <div className="btntn x">
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="btnbtn">
            <button id='xyz' onClick={() => log()}>Log In</button>
          </div>
        )}
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Header;
