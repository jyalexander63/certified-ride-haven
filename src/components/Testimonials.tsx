
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AnimatedSection from './ui/AnimatedSection';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-time Car Buyer",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Diagme took all the stress out of buying a car. The certification process gave me confidence that I was getting a quality vehicle without any hidden issues.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Car Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    quote: "As someone who knows cars, I was impressed by the thoroughness of Diagme's certification. They caught issues I wouldn't have noticed during a regular inspection.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Busy Professional",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "The home delivery option was perfect for my busy schedule. The entire process was efficient, transparent, and the car exceeded my expectations.",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Family Man",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "Finding a safe, reliable car for my family was my priority. Diagme's certification gave us peace of mind, and the process was straightforward from start to finish.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex * itemsPerPage,
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <section id="testimonials" className="section-padding bg-silver-50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-diagme-100 bg-diagme-50 px-3 py-1 mb-4">
            <span className="text-xs font-medium text-diagme-800">Customer Stories</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-charcoal-600 text-lg">
            Hear from satisfied customers who found their perfect certified vehicle through Diagme.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={testimonial.id}
                delay={index * 100}
                className=""
              >
                <Card className="h-full border border-silver-100 p-6 glassmorphism">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-display font-semibold text-charcoal-900">{testimonial.name}</h3>
                      <p className="text-sm text-charcoal-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-silver-200'}`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-charcoal-700">
                    "{testimonial.quote}"
                  </blockquote>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-3">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full border border-silver-200 bg-white text-charcoal-700 hover:bg-silver-50 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full border border-silver-200 bg-white text-charcoal-700 hover:bg-silver-50 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
