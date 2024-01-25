import React, { useContext } from "react";
import MovieList from "./Cinema/MovieList";
import { ThemeContext } from "./Context/Index";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`page ${darkMode ? "dark" : ""} duration-300`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
