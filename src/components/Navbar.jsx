import { Link } from "react-router-dom";
import NavbarBase from "./NavbarBase";
import Dashboard from "./Dashboard";
import AuthStatus from "./AuthStatus";

const Navbar = () => {
  const user = true
  const cart = ['pc', 'mouse', 'teclado']
  const isAdmin = true
  
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow">
     <div className="flex items-center gap-8">
        <NavbarBase user={user} cart={cart} />
      </div>

      <div className="flex items-center gap-4">
        <Dashboard isAdmin={isAdmin} />
        <AuthStatus user={user} />
      </div>
    </nav>
  );
}

export default Navbar