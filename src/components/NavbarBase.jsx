import { Link } from "react-router-dom"
import CartButton from "./CartButton";

const NavbarBase = ({ user, cart }) => {
  return (
    <>
      <Link
        className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex"
        to="/"
      >
        E-Commerce
      </Link>

      <nav className="flex flex-wrap items-center gap-4">
        <Link
          className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
          to="/signup"
        >
          Register
        </Link>
        <CartButton user={user} cart={cart} />
      </nav>
    </>
  );
}

export default NavbarBase
