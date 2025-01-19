import { Link } from 'react-router';

const Navbar = () => (
  <nav className="bg-slate-950/90 text-orange-50 p-4 fixed w-full top-0 z-50 backdrop-blur-sm">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-400">Visages</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-300">Home</Link>
        <Link to="/events" className="hover:text-orange-300">Events</Link>
        <Link to="/contact" className="hover:text-orange-300">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
