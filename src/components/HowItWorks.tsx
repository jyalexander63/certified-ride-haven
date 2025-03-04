
import AnimatedSection from './ui/AnimatedSection';
import { Search, CheckCircle, Truck, Key } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-white" />,
    title: "Browse & Choose",
    description: "Explore our selection of certified vehicles with detailed information and high-quality images."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-white" />,
    title: "Verify & Reserve",
    description: "Review the certification details and vehicle history before making a reservation online."
  },
  {
    icon: <Truck className="h-10 w-10 text-white" />,
    title: "Deliver or Pickup",
    description: "Choose between convenient home delivery or picking up your vehicle at a designated location."
  },
  {
    icon: <Key className="h-10 w-10 text-white" />,
    title: "Drive with Confidence",
    description: "Enjoy your certified vehicle with the peace of mind that comes with Diagme certification."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-charcoal-900 text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-diagme-900 bg-diagme-950/40 px-3 py-1 mb-4">
            <span className="text-xs font-medium text-diagme-200">Simple Process</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How Diagme Works
          </h2>
          <p className="text-silver-300 text-lg">
            Our straightforward process makes finding and purchasing a certified vehicle easier than ever.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-diagme-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  {step.icon}
                </div>
                
                <div className="absolute top-10 left-full w-full h-0.5 bg-diagme-800 hidden lg:block" 
                     style={{ display: index === steps.length - 1 ? 'none' : '' }}></div>
                
                <h3 className="font-display font-semibold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-silver-300">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
