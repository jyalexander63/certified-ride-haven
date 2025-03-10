
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { 
  Search, 
  Plus, 
  MessageSquare,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CarCard from '@/components/ui/CarCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock data
const carListings = [
  {
    id: '1',
    title: '2021 Tesla Model 3 Long Range',
    price: 41500,
    year: 2021,
    mileage: 28500,
    fuelType: 'Electric',
    image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  },
  {
    id: '2',
    title: '2020 BMW 5 Series 530i',
    price: 38900,
    year: 2020,
    mileage: 32000,
    fuelType: 'Gasoline',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  },
  {
    id: '3',
    title: '2022 Audi Q5 Premium Plus',
    price: 47500,
    year: 2022,
    mileage: 18900,
    fuelType: 'Hybrid',
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  },
  {
    id: '4',
    title: '2019 Mercedes-Benz E-Class',
    price: 43200,
    year: 2019,
    mileage: 35600,
    fuelType: 'Gasoline',
    image: 'https://images.unsplash.com/photo-1618486613525-c694bf152b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  },
  {
    id: '5',
    title: '2020 Porsche Cayenne',
    price: 67800,
    year: 2020,
    mileage: 24300,
    fuelType: 'Gasoline',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  },
  {
    id: '6',
    title: '2021 Lexus RX 350',
    price: 49700,
    year: 2021,
    mileage: 19800,
    fuelType: 'Gasoline',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  },
  {
    id: '7',
    title: '2022 Volvo XC60 Recharge',
    price: 54900,
    year: 2022,
    mileage: 15200,
    fuelType: 'Hybrid',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  },
  {
    id: '8',
    title: '2019 Volkswagen Atlas',
    price: 36200,
    year: 2019,
    mileage: 42300,
    fuelType: 'Gasoline',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    certified: true
  }
];

const makes = ['Any', 'Tesla', 'BMW', 'Audi', 'Mercedes-Benz', 'Porsche', 'Lexus', 'Volvo', 'Volkswagen'];
const models = ['Any', 'Model 3', '5 Series', 'Q5', 'E-Class', 'Cayenne', 'RX 350', 'XC60', 'Atlas'];
const years = ['Any', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];
const fuelTypes = ['Any', 'Gasoline', 'Electric', 'Hybrid', 'Diesel'];

const Marketplace = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([20000, 70000]);
  const isMobile = useIsMobile();

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header with Search and Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-2">
                Browse Certified Vehicles
              </h1>
              <p className="text-charcoal-600">Find your next certified vehicle with confidence</p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-grow md:max-w-xs">
                <Input
                  type="text"
                  placeholder="Search vehicles..."
                  className="pl-10 pr-4 py-2 w-full"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400" />
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="border-silver-200"
                onClick={toggleFilters}
              >
                <SlidersHorizontal className="h-5 w-5 text-charcoal-700" />
              </Button>
              
              <Button className="gap-2 whitespace-nowrap bg-diagme-600 hover:bg-diagme-700">
                <Plus className="h-4 w-4" /> Create Listing
              </Button>
            </div>
          </div>

          {/* Filters Section - Horizontally Displayed on Desktop */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-4 mb-8 bg-silver-50 rounded-lg p-4">
              <div className="grid grid-cols-5 gap-4 w-full">
                <div>
                  <label className="text-sm font-medium text-charcoal-700 mb-1 block">Make</label>
                  <Select defaultValue="Any">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {makes.map((make) => (
                        <SelectItem key={make} value={make}>
                          {make}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-charcoal-700 mb-1 block">Model</label>
                  <Select defaultValue="Any">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {models.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-charcoal-700 mb-1 block">Year</label>
                  <Select defaultValue="Any">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-charcoal-700 mb-1 block">Fuel Type</label>
                  <Select defaultValue="Any">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {fuelTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-charcoal-700 mb-1 block">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                  <Slider
                    defaultValue={[20000, 70000]}
                    min={5000}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-3"
                  />
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="mt-5 whitespace-nowrap">
                Clear Filters
              </Button>
            </div>
          )}
          
          {/* Mobile Filters - Slide in from Side */}
          {isMobile && filtersOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 p-4">
              <div className="bg-white rounded-lg shadow-lg h-full max-w-xs ml-auto p-5 overflow-y-auto transform animate-fade-in-right">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display font-semibold text-lg">Filters</h3>
                  <Button variant="ghost" size="icon" onClick={toggleFilters}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-700 mb-1 block">Make</label>
                    <Select defaultValue="Any">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        {makes.map((make) => (
                          <SelectItem key={make} value={make}>
                            {make}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-charcoal-700 mb-1 block">Model</label>
                    <Select defaultValue="Any">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        {models.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-charcoal-700 mb-1 block">Year</label>
                    <Select defaultValue="Any">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-charcoal-700 mb-1 block">Fuel Type</label>
                    <Select defaultValue="Any">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        {fuelTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-charcoal-700 mb-1 block">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <Slider
                      defaultValue={[20000, 70000]}
                      min={5000}
                      max={100000}
                      step={1000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-3"
                    />
                  </div>
                  
                  <div className="pt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="w-1/2">
                      Clear All
                    </Button>
                    <Button className="w-1/2 bg-diagme-600 hover:bg-diagme-700">
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {carListings.map((car, index) => (
              <AnimatedSection key={car.id} delay={index * 50}>
                <CarCard {...car} />
              </AnimatedSection>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="flex justify-center mb-16">
            <Button variant="outline" className="border-silver-200 px-6">
              Load More Vehicles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
