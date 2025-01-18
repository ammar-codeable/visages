import { Link } from 'react-router';

const Navbar = () => (
  <nav className="bg-blue-800 text-white p-4 fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Visages</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/events" className="hover:text-blue-200">Events</Link>
        <Link to="/contact" className="hover:text-blue-200">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
