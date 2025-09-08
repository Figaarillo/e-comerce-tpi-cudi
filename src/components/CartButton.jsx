import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

const CartButton = ({user = true, cart}) => {
  return (
    user && (
      <Link className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out">
        <ShoppingCart className="inline-block mr-1" size={18} />
        {cart.length > 0 && <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-emerald-500 hover:bg-emerald-300 transition duration-300 ease-in-out rounded-full">{cart.length}</span>}
      </Link>
    )
  );
}

export default CartButton