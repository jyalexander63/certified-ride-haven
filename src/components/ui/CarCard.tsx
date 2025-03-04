
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Fuel, Calendar, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarCardProps {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuelType: string;
  image: string;
  certified: boolean;
  className?: string;
}

const CarCard = ({
  title,
  price,
  year,
  mileage,
  fuelType,
  image,
  certified,
  className,
}: CarCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className={cn(
      'overflow-hidden card-hover border border-silver-100',
      className
    )}>
      <div className="relative aspect-[16/9] w-full image-blur-wrapper">
        <div className="absolute top-3 left-3 z-10">
          {certified && (
            <Badge className="bg-diagme-100 hover:bg-diagme-200 text-diagme-800 border-0 flex items-center gap-1 px-3 py-1">
              <Shield className="w-3.5 h-3.5" /> Certified
            </Badge>
          )}
        </div>
        <img
          src={image}
          alt={title}
          className={cn(
            'h-full w-full object-cover transition-all duration-500',
            !imageLoaded && 'image-blur-loading',
            imageLoaded && 'image-blur-loaded'
          )}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-charcoal-900 mb-2">{title}</h3>
        <p className="text-diagme-600 font-semibold text-xl mb-4">${price.toLocaleString()}</p>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-charcoal-600">
            <Calendar className="h-4 w-4 text-charcoal-400" /> {year}
          </div>
          <div className="flex items-center gap-2 text-sm text-charcoal-600">
            <Gauge className="h-4 w-4 text-charcoal-400" /> {mileage.toLocaleString()} mi
          </div>
          <div className="flex items-center gap-2 text-sm text-charcoal-600 col-span-2">
            <Fuel className="h-4 w-4 text-charcoal-400" /> {fuelType}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
