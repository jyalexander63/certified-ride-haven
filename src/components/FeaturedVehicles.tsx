
import { Button } from '@/components/ui/button';
import CarCard from './ui/CarCard';
import AnimatedSection from './ui/AnimatedSection';
import { ChevronRight } from 'lucide-react';

const featuredCars = [
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
  }
];

const FeaturedVehicles = () => {
  return (
    <section className="section-padding">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-diagme-100 bg-diagme-50 px-3 py-1 mb-4">
              <span className="text-xs font-medium text-diagme-800">Featured Vehicles</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Explore Our Top Certified Vehicles
            </h2>
            <p className="text-charcoal-600 text-lg">
              Browse through our selection of premium certified vehicles that meet our rigorous standards for quality and reliability.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-silver-200">
            View All Vehicles
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car, index) => (
            <AnimatedSection key={car.id} delay={index * 100}>
              <CarCard {...car} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
