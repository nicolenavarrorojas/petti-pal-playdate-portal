
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PawPrint } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <PawPrint className="h-8 w-8 text-petti-primary" />
              <span className="ml-2 text-2xl font-bold text-petti-dark">Petti</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-petti-dark hover:text-petti-primary px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/services" className="text-petti-dark hover:text-petti-primary px-3 py-2 rounded-md font-medium">
              Services
            </Link>
            <Link to="/login" className="text-petti-dark hover:text-petti-primary px-3 py-2 rounded-md font-medium">
              Login
            </Link>
            <Link to="/register" className="petti-button px-4 py-2 text-white petti-gradient">
              Register
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-petti-dark hover:text-petti-primary focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-petti-dark hover:text-petti-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-petti-dark hover:text-petti-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link to="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-petti-dark hover:text-petti-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link to="/register" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white petti-gradient w-full text-center py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
