
import { Button } from '@/components/ui/button';
import AnimatedSection from './ui/AnimatedSection';
import { ChevronRight, CheckCircle, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-diagme-50/50 to-transparent -z-10"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="max-w-2xl">
            <div className="inline-flex items-center mb-6 rounded-full border border-diagme-100 bg-diagme-50 px-3 py-1">
              <Badge>
                <Shield className="h-3.5 w-3.5 mr-1" />
                <span className="text-xs font-medium">Certified Vehicles Only</span>
              </Badge>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 mb-6">
              Find your perfect <span className="text-gradient">certified</span> car with confidence
            </h1>
            
            <p className="text-charcoal-600 text-lg md:text-xl mb-8 max-w-xl">
              Diagme connects you with verified, certified vehicles, eliminating uncertainty and providing a seamless car buying experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-diagme-600 hover:bg-diagme-700 h-12 px-6 text-base">
                Browse Certified Cars
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-silver-200 h-12 px-6 text-base">
                How It Works
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-diagme-600" />
                <span className="text-charcoal-700">Thoroughly Inspected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-diagme-600" />
                <span className="text-charcoal-700">Verified History</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-diagme-600" />
                <span className="text-charcoal-700">Honest Pricing</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={300}>
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-64 h-64 bg-diagme-100 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Luxury certified car" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-display font-bold text-lg">2023 Porsche Taycan</h3>
                      <Badge className="bg-diagme-100 text-diagme-800">Certified</Badge>
                    </div>
                    <p className="text-charcoal-900 font-semibold text-xl">$89,500</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center text-diagme-800 font-medium">
    {children}
  </span>
);

export default Hero;
