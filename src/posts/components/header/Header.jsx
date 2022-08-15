import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-3 bg-violet-900">
      <div 
        className="container mx-auto text-2xl text-white flex justify-between alingn-center"
      >

        <Link to="/">MessageNode</Link>

        <nav className="space-x-5">
          <Link to="/" className="p-3">Home</Link>
          <Link to="/posts" className="p-3">Posts</Link>
        </nav>
      </div>
    </header>
  );
};
