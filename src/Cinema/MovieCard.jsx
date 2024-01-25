import React, { useContext, useState } from "react";
import { MovieContext } from "../Context/Index";
import { getImageUrl } from "../utils/cine-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const { title, rating } = movie;
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);
  const handleAddToCart = (movie) => {
    // Add movie to cart
    // setCartData([...cartData, movie]);
    const isExisted = state.cartData.some((item) => item.id === movie.id);
    if (!isExisted) {
      // setCartData([...cartData, movie]);
      dispatch({ type: "ADD_TO_CART", payload: movie });
    } else {
      alert("Already added to cart");
    }
  };
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  return (
    <>
      {showModal && <MovieDetailsModal movie={selectedMovie} state={showModal} onClose={handleModalClose} />}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img className="w-full object-cover" src={getImageUrl(movie)} alt={title} />

        <figcaption className="pt-4">
          <a href="#" onClick={() => handleMovieSelection(movie)}>
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
            <div className="flex items-center space-x-1 mb-5">
              {/* {Array.from({ length: rating }, (_, i) => (
            <img key={i} src={star} width="14" height="14" alt="" />
          ))} */}
              {Rating({ value: rating })}
            </div>
          </a>
          <a onClick={() => handleAddToCart(movie)} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm" href="#">
            <img src="./assets/tag.svg" alt="" />
            <span>$100 | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
