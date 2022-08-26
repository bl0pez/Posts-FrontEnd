import { NavLink, Link } from "react-router-dom";

export const Header = () => {
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
        </nav>
      </div>
    </header>
  );
};
