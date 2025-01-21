import { Link } from 'react-router';

const Navbar = () => (
  <div className="fixed top-0 z-50 w-full">
    {/* Decorative border SVG */}
    <div className="absolute bottom-0 left-0 right-0 translate-y-full">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="h-6 w-full fill-orange-200/80"
      >
        <path d="M0,0 C150,60 350,0 500,30 C650,60 750,0 900,40 C1050,80 1150,20 1200,0 V0 H0" />
      </svg>
    </div>

    <nav className="bg-gradient-to-r from-orange-100/95 via-orange-200/95 to-orange-100/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link 
          to="/" 
          className="text-2xl font-bold text-orange-950 transition-all hover:text-orange-700"
        >
          Visages
        </Link>
        
        <div className="space-x-8">
          {['Home', 'Events'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative font-medium text-orange-950 transition-all hover:text-orange-700"
            >
              <span className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-400 transition-all group-hover:w-full" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
