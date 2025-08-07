import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-center items-center p-5 bg-blue-600 fixed z-20 w-screen">
      <div className="flex basis-[50%] mr-30 font-bold text-3xl text-yellow-500">
        <Link to="/">Tech-X</Link>
      </div>
      <nav className="flex gap-6 mr-10 ">
        <Link
          to="/"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Contact
        </Link>
        <Link
          to="/features/feature1"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Feature1
        </Link>
        <Link
          to="/features/feature2"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Feature2
        </Link>
        <Link
          to="/landing"
          className="hover:text-yellow-400  duration-300 transform translate ease-in-out delay-150"
        >
          Landing
        </Link>
      </nav>
    </div>
  );
}
