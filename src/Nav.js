import React from "react";
import Search from "./Search";
import { useSelector } from "react-redux";

const Nav = () => {
  const logged = useSelector((state) => state.islogged);
  return (
    <nav>
      <h1>NAV:{logged} </h1>
      <Search />
    </nav>
  );
};
export default Nav;
