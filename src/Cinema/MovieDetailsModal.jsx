import React, { useContext, useEffect, useRef } from "react";
import { MovieContext } from "../Context/Index";
import { getImageUrl } from "../utils/cine-utils";

export default function MovieDetailsModal({ movie, state, onClose }) {
  const { title, price, genre, description } = movie;
  const { cartData, setCartData } = useContext(MovieContext);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onClose]);

  const handleAddToCart = (movie) => {
    // Add movie to cart
    const isExisted = cartData.some((movie) => movie.id === movie.id);
    if (!isExisted) {
      setCartData([...cartData, movie]);
    } else {
      alert("Already added to cart");
    }
  };
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm border-8 ${state ? "" : "hidden"}`}>
      <div ref={ref} className={`absolute left-1/2 top-[30%] -translate-x-1/2 transform ${state ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} transition-transform duration-300 ease-in-out w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr]`}>
        <img className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]" src={getImageUrl(movie)} alt="" />
        <div className="p-5 lg:p-11">
          <div>
            <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">{title}</h2>
            <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">{genre}</span>
          </div>
          <p className="text-sm lg:text-base mb-8 lg:mb-16">{description}</p>
          <div className="grid lg:grid-cols-2 gap-2">
            <a onClick={handleAddToCart} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm" href="#">
              <img src="./assets/tag.svg" alt="" />
              <span>${price} | Add to Cart</span>
            </a>
            <a href="#" onClick={onClose} className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
