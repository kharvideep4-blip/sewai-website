import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  // Scroll hide
  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      lastScroll = currentScroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setFeaturesOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleFeatures = (e) => { e.preventDefault(); setFeaturesOpen(!featuresOpen) }
  const toggleServices = (e) => { e.preventDefault(); e.stopPropagation(); setServicesOpen(!servicesOpen) }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Top Row: 3-column grid for perfect centering */}
      <div className="grid grid-cols-3 items-center px-4 py-3">
        {/* Left column: hamburger (mobile) + empty placeholder (desktop) */}
        <div className="flex items-center">
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-2xl text-amber-500 focus:outline-none"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <div className="hidden lg:block w-10"></div>
        </div>

        {/* Center column: brand (logo + text) – always centered */}
        <div className="flex justify-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/assets/images/sewai-logo.png" 
              alt="SEWAI Logo" 
              className="h-16 w-auto" 
            />
            <div className="flex flex-col">
              <span className="font-playfair text-3xl font-bold text-amber-500">SEWAI</span>
              <span className="text-[10px] text-gray-500 leading-tight hidden sm:block">
                Sacred Enterprise for Worship<br />Administration & Integration
              </span>
            </div>
          </Link>
        </div>

        {/* Right column: Request Quote (desktop) + empty placeholder (mobile) */}
        <div className="flex justify-end items-center">
          <Link to="/contact" className="btn-primary hidden lg:inline-block">
            Request Quote
          </Link>
          <div className="lg:hidden w-10"></div>
        </div>
      </div>

      {/* Bottom Row: Orange navigation bar – full width, bigger text, more spacing */}
      <div className={`w-full bg-amber-500 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 py-3 px-4 text-white text-base font-medium">
          <NavLink to="/" className={({ isActive }) => `px-5 py-2 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`} end>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `px-5 py-2 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>About Us</NavLink>

          {/* Features Dropdown */}
          <div className="relative group">
            <button onClick={toggleFeatures} className="flex items-center px-5 py-2 rounded hover:bg-white/10">
              Features <i className="fas fa-chevron-down ml-1 text-sm"></i>
            </button>
            <div className={`lg:absolute lg:left-0 lg:mt-2 lg:w-80 bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg p-2 ${featuresOpen ? 'block' : 'hidden'} lg:group-hover:block`}>
              <ul className="space-y-1">
                {/* Temple Services – now with horizontal grid */}
                <li className="relative group/sub">
                  <button onClick={toggleServices} className="flex items-center justify-between w-full px-3 py-2 hover:bg-amber-50 rounded">
                    Temple Services <i className="fas fa-chevron-right ml-2 text-xs"></i>
                  </button>
                  <ul className={`lg:absolute lg:left-full lg:top-0 lg:ml-2 lg:w-[420px] bg-white border border-gray-200 rounded-lg shadow-lg p-3 ${servicesOpen ? 'block' : 'hidden'} lg:group-hover/sub:block max-h-96 overflow-y-auto`}>
                    <li className="grid grid-cols-3 gap-1">
                      <Link to="/features/temple-services/temple-maps" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Temple Maps</Link>
                      <Link to="/features/temple-services/temple-tourism" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Temple Tourism</Link>
                      <Link to="/features/temple-services/temple-time-schedule" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Temple Time Schedule</Link>
                      <Link to="/features/temple-services/key-temple-event" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Key Temple Event</Link>
                      <Link to="/features/temple-services/temple-delicate-moments" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Temple Delicate Moments</Link>
                      <Link to="/features/temple-services/temple-security" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Temple Security</Link>
                      <Link to="/features/temple-services/temple-true-noms" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Temple True Noms</Link>
                      <Link to="/features/temple-services/temple-visitor-management" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Temple Visitor Management</Link>
                      <Link to="/features/temple-services/prasad-automation" className="block px-3 py-1 hover:bg-amber-50 rounded text-sm">Prasad Automation</Link>
                    </li>
                  </ul>
                </li>
                <li><Link to="/features/setting-up" className="block px-3 py-2 hover:bg-amber-50 rounded">Setting Up</Link></li>
                <li><Link to="/features/devotee-connect" className="block px-3 py-2 hover:bg-amber-50 rounded">Devotee Connect</Link></li>
                <li><Link to="/features/payment-gateway" className="block px-3 py-2 hover:bg-amber-50 rounded">Payment Gateway</Link></li>
                <li><Link to="/features/calendar-events" className="block px-3 py-2 hover:bg-amber-50 rounded">Temple Events</Link></li>
                <li><Link to="/features/hall-booking" className="block px-3 py-2 hover:bg-amber-50 rounded">Hall Booking</Link></li>
                <li><Link to="/features/ecommerce" className="block px-3 py-2 hover:bg-amber-50 rounded">Temple E‑MarketPlace</Link></li>
                <li><Link to="/features/inventory" className="block px-3 py-2 hover:bg-amber-50 rounded">Inventory</Link></li>
                <li><Link to="/features/ai-features" className="block px-3 py-2 hover:bg-amber-50 rounded">AI Features</Link></li>
                <li><Link to="/features/procedures" className="block px-3 py-2 hover:bg-amber-50 rounded">Procedures</Link></li>
                <li><Link to="/features/smart-donations" className="block px-3 py-2 hover:bg-amber-50 rounded">Smart Donations</Link></li>
                <li><Link to="/features/deva-program" className="block px-3 py-2 hover:bg-amber-50 rounded">Deva Program</Link></li>
                <li><Link to="/features/temple-merchandise" className="block px-3 py-2 hover:bg-amber-50 rounded">Temple Merchandise</Link></li>
              </ul>
            </div>
          </div>

          <NavLink to="/knowledge-base" className={({ isActive }) => `px-5 py-2 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>Knowledge Base</NavLink>
          <NavLink to="/media" className={({ isActive }) => `px-5 py-2 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>Media</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-5 py-2 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>Contact</NavLink>
          <NavLink to="/temple-platform-registration" className={({ isActive }) => `px-5 py-2 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>Temple Platform Registration</NavLink>
          <NavLink to="/temple-enquiry" className={({ isActive }) => `px-5 py-2 rounded ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>Temple Enquiry</NavLink>

          <Link to="/contact" className="lg:hidden px-5 py-2 rounded bg-white/20 hover:bg-white/30">Request Quote</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar