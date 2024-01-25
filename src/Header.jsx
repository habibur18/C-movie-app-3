import React, { useContext, useState } from "react";
import CartDetails from "./Cinema/CartDetails";
import { MovieContext, ThemeContext } from "./Context/Index";
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import { default as cart } from "./assets/shopping-cart.svg";
export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMood } = useContext(ThemeContext);
  console.log(darkMode);
  return (
    <>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li onClick={() => setDarkMood(!darkMode)}>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                {darkMode ? <img src={sun} width="24" height="24" alt="" /> : <img src={moon} width="24" height="24" alt="" />}
              </a>
            </li>
            <li>
              <a onClick={() => setShowCart(true)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={cart} width="24" height="24" alt="" />
                {cartData.length > 0 && <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">{cartData.length}</span>}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
