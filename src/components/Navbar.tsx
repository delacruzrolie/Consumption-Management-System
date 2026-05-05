import React, { useState, useRef, useEffect } from 'react';
import { 
  Filter, Inbox, LayoutDashboard, Zap, Tag, Droplet, Droplets, 
  Settings, Menu, X, ChevronDown, Activity, BarChart3 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type NavItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  subItems?: { title: string; icon: React.ReactNode; href: string }[];
};

const navItems: NavItem[] = [
  {
    title: 'FUEL',
    icon: <Filter className="w-4 h-4" />,
    href: '#',
    subItems: [
      { title: 'OFFICE', icon: <Inbox className="w-4 h-4" />, href: '#office' },
      { title: 'GASOLINE CONSUMPTION', icon: <Filter className="w-4 h-4" />, href: '#gasoline' },
      { title: 'FUEL DASHBOARD', icon: <LayoutDashboard className="w-4 h-4" />, href: '#fuel-dashboard' },
    ],
  },
  {
    title: 'ELECTRICITY',
    icon: <Zap className="w-4 h-4" />,
    href: '#',
    subItems: [
      { title: 'LABEL', icon: <Tag className="w-4 h-4" />, href: '#elec-label' },
      { title: 'ELECTRICITY CONSUMPTION', icon: <Zap className="w-4 h-4" />, href: '#electricity' },
      { title: 'ELECTRICITY DASHBOARD', icon: <Activity className="w-4 h-4" />, href: '#elec-dashboard' },
    ],
  },
  {
    title: 'WATER',
    icon: <Droplet className="w-4 h-4" />,
    href: '#',
    subItems: [
      { title: 'LABEL NAME', icon: <Tag className="w-4 h-4" />, href: '#water-label' },
      { title: 'WATER CONSUMPTION', icon: <Droplets className="w-4 h-4" />, href: '#water' },
      { title: 'WATER DASHBOARD', icon: <BarChart3 className="w-4 h-4" />, href: '#water-dashboard' },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close dropdown when clicking outside
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      ref={headerRef} 
      className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 shadow-sm z-50 sticky top-0 font-sans"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
          D
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-widest text-slate-800 uppercase leading-tight">Consumption Portal</h1>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter leading-tight">Resource Management System</p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8 h-full">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-[12px] font-semibold text-slate-600 h-full">
          {navItems.map((item) => (
            <div 
              key={item.title} 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`hover:text-emerald-700 transition-colors h-full flex items-center gap-1 ${
                  activeDropdown === item.title ? 'border-b-2 border-emerald-600 text-emerald-700 pt-[2px]' : 'border-b-2 border-transparent pt-[2px]'
                }`}
                aria-expanded={activeDropdown === item.title}
              >
                {item.title}
                {item.subItems && (
                  <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.subItems && (
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-[100%] left-0 w-64 bg-white rounded-b-lg shadow-lg py-1 border border-t-0 border-slate-200 overflow-hidden"
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-emerald-700 transition-colors uppercase tracking-wider"
                        >
                          <span className="opacity-70">{subItem.icon}</span>
                          {subItem.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section (Settings / Lang) */}
        <div className="hidden md:flex items-center gap-3 border-l pl-4 sm:pl-8 border-slate-200 h-8">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
            <Settings className="w-4 h-4" />
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-500 hover:bg-slate-100 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center text-xs font-bold text-slate-800 uppercase px-2 py-2 tracking-wider">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                  {item.subItems && (
                    <div className="pl-6 space-y-1 pb-2">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-md text-slate-500 hover:text-emerald-700 hover:bg-slate-50 uppercase tracking-wider"
                        >
                          <span className="opacity-70">{subItem.icon}</span>
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="border-t border-slate-200 mt-4 pt-4 px-2">
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-2">Language Options</div>
                <a href="#" className="block px-3 py-2 rounded-md text-xs font-semibold text-slate-500 hover:text-emerald-700 hover:bg-slate-50 uppercase tracking-wider">
                  Filipino
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-xs font-semibold text-slate-500 hover:text-emerald-700 hover:bg-slate-50 uppercase tracking-wider">
                  English
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
