import { Link } from "react-router-dom";

// Header component
export const Header = () => {
    return (
      <div className="flex justify-between items-center mx-40 mt-8">
        <Link to="/" className=" underline text-bold text-slate-600 text-6xl ml-">Notes</Link>
      </div>
    );
  }