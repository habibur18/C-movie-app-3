import { useReducer, useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./Context/Index";
import Page from "./Page";
import { cartReducer, initailState } from "./Reducers/CartReducers";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMood] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initailState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMood }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
