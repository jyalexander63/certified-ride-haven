
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Diagme</h3>
            <p className="text-silver-300 max-w-xs">
              The premier marketplace for certified pre-owned vehicles, ensuring quality and transparency.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-silver-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-silver-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-silver-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-silver-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-silver-300 hover:text-white transition-colors">Browse Cars</a></li>
              <li><a href="#how-it-works" className="text-silver-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-silver-300 hover:text-white transition-colors">Our Certification</a></li>
              <li><a href="#testimonials" className="text-silver-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-silver-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-silver-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-silver-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-silver-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-silver-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-silver-300 hover:text-white transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-silver-300 mb-4">Stay updated with the latest vehicles and promotions.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-charcoal-800 border-charcoal-700 text-white placeholder:text-silver-500"
              />
              <Button className="bg-diagme-600 hover:bg-diagme-700 whitespace-nowrap">
                <Mail className="h-4 w-4 mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-400 text-sm">
            © 2023 Diagme. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-silver-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-silver-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-silver-400 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
