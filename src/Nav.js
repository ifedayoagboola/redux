import React from "react";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const logged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  return (
    <nav>
      <h1>NAV</h1>
      <Search />
      <button onClick={() => dispatch({ type: "LOGGEDIN" })}>see list</button>
      {logged && (
        <div>
          <h1>Movie List</h1>
          <h3>Harry Potter</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptates quae vitae impedit quisquam nostrum nulla alias dolore?
            Excepturi, aliquam sit ad quas eaque quidem vel. Sint harum sapiente
            ullam?
          </p>
          <h3>Spider Man</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptates quae vitae impedit quisquam nostrum nulla alias dolore?
            Excepturi, aliquam sit ad quas eaque quidem vel. Sint harum sapiente
            ullam?
          </p>
          <h3>Tom & Jerry</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptates quae vitae impedit quisquam nostrum nulla alias dolore?
            Excepturi, aliquam sit ad quas eaque quidem vel. Sint harum sapiente
            ullam?
          </p>
        </div>
      )}
    </nav>
  );
};
export default Nav;
