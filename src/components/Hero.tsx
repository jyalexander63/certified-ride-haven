
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Car } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented when search functionality is available
    console.log('Searching for:', searchTerm);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-diagme-50/70 to-transparent"
        aria-hidden="true"
      />
      
      {/* Background image - loaded with priority */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1617469767053-8a5cb64a6812?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundAttachment: 'fixed'
        }}
        aria-hidden="true"
      />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          <div className="lg:col-span-7">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center rounded-full border border-diagme-100 bg-diagme-50 px-3 py-1 mb-4">
                <span className="text-xs font-medium text-diagme-800">Introducing Diagme</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-4 md:mb-6">
                Trust the <span className="text-gradient">journey</span> to your next vehicle
              </h1>
              
              <p className="text-charcoal-700 text-lg md:text-xl mb-8 max-w-2xl">
                Diagme offers certified pre-owned vehicles with comprehensive history checks and expert inspections. Drive with confidence knowing your car has been thoroughly vetted.
              </p>
              
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-10">
                <div className="relative flex-grow">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-400" />
                  <Input
                    type="text"
                    placeholder="Search by make, model, or keyword"
                    className="pl-10 pr-4 py-6 w-full text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-diagme-600 hover:bg-diagme-700 px-6 py-6">
                  <span>Search Vehicles</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <div className="flex flex-wrap items-center gap-4 text-charcoal-700">
                <AnimatedSection delay={100}>
                  <div className="flex items-center gap-2">
                    <div className="bg-diagme-50 rounded-full p-1">
                      <ChevronRight className="h-4 w-4 text-diagme-600" />
                    </div>
                    <p>Transparent pricing</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={200}>
                  <div className="flex items-center gap-2">
                    <div className="bg-diagme-50 rounded-full p-1">
                      <ChevronRight className="h-4 w-4 text-diagme-600" />
                    </div>
                    <p>150+ point inspection</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={300}>
                  <div className="flex items-center gap-2">
                    <div className="bg-diagme-50 rounded-full p-1">
                      <ChevronRight className="h-4 w-4 text-diagme-600" />
                    </div>
                    <p>30-day money back guarantee</p>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
