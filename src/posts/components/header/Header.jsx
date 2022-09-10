import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";

export const Header = () => {

  const { startoagout } = useContext(AuthContext);

  return (
    <header className="py-3 bg-violet-900">
      <div 
        className="container mx-auto text-2xl text-white flex justify-between alingn-center"
      >

        <Link to="/feed/posts">MessageNode</Link>

        <nav className="space-x-5">
          <NavLink 
            to="/feed/posts" 
            className={({ isActive }) => isActive ? "text-amber-500 p-3" : "p-3"}

            >Posts</NavLink>
            <button
              onClick={startoagout}
              className="p-3"
            >Logout</button>
        </nav>
      </div>
    </header>
  );
};
