import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-center items-center p-5 bg-blue-500 fixed z-20 w-screen">
      <div className="flex basis-[50%] mr-30 font-bold text-3xl text-yellow-500">
        <Link to="/">Tech-X</Link>
      </div>
      <nav className="flex gap-6 mr-10 text-lg font-bold italic">
        <Link
          to="/"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Home
        </Link>

        <Link
          to="/features"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Features
        </Link>

        <Link
          to="/contact"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Contact
        </Link>

        <Link
          to="/pricing"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Pricing
        </Link>
      </nav>
    </div>
  );
}
