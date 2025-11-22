import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../useAuthStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5EB74B] shadow-none sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/learnlogo.png"
            alt="Logo"
            className="w-16 h-16 bg-transparent"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/books" className="hover:text-blue-600">Books</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>

          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
             
          ) : (
             
            <>
              <Link to="/login" className="hover:text-blue-600">Login</Link>
              <Link to="/register" className="hover:text-blue-600">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t text-center py-4 space-y-3">
          <Link to="/" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/courses" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/books" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Books</Link>
          <Link to="/contact" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
