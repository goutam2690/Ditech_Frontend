import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? '' : menu);
  };

  const navItems = [
    { name: 'Home', type: 'link' },
    { name: 'Services', type: 'link' },
    { 
      name: 'Case Studies',
      type: 'dropdown',
    },
    {
      name: 'Page',
      type: 'dropdown',
    },
    {
      name: 'Blog',
      type: 'dropdown',
    },
    { name: 'Contact', type: 'link' },
  ];

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-cyan-400">D</span>
              ITECH
              <span className="text-cyan-400">D</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'dropdown' ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transform transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded hover:bg-cyan-400 hover:text-black transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.type === 'dropdown' ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 hover:text-cyan-400 transition-colors w-full"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transform transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <a href="#" className="block hover:text-cyan-400 transition-colors">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="w-full border border-cyan-400 text-cyan-400 px-6 py-2 rounded hover:bg-cyan-400 hover:text-black transition-colors">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;