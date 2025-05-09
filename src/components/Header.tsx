
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Menu, X, MessageSquare, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Our Certification', href: '/#benefits' },
    { label: 'Testimonials', href: '/#testimonials' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3',
        isScrolled ? 'glassmorphism shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-display text-charcoal-900 text-2xl font-bold">Diagme</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.label} 
                    href={link.href}
                    className="text-charcoal-700 hover:text-diagme-600 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.label} 
                    to={link.href}
                    className="text-charcoal-700 hover:text-diagme-600 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            {!isMobile && (
              <>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-silver-200 text-charcoal-700"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative text-charcoal-700"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-diagme-600 rounded-full"></span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative text-charcoal-700"
                >
                  <Bell className="h-5 w-5" />
                </Button>
              </>
            )}
            <Avatar className="h-9 w-9 border-2 border-white">
              <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="ml-2 md:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div 
          className={cn(
            'fixed inset-0 z-40 bg-white pt-20 transform transition-transform duration-300 ease-in-out',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 pt-8">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.label} 
                    href={link.href}
                    className="text-charcoal-900 text-xl font-medium border-b border-silver-100 pb-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.label} 
                    to={link.href}
                    className="text-charcoal-900 text-xl font-medium border-b border-silver-100 pb-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="flex items-center justify-between border-b border-silver-100 pb-4">
                <span className="text-charcoal-900 text-xl font-medium">Messages</span>
                <MessageSquare className="h-5 w-5" />
              </div>
              <Button 
                variant="outline" 
                className="w-full justify-start border-silver-200 text-charcoal-700"
              >
                <Search className="h-4 w-4 mr-2" />
                Search Cars
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
