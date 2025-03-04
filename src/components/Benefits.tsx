
import AnimatedSection from './ui/AnimatedSection';
import { Shield, Car, ClipboardCheck, Calculator } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="h-8 w-8 text-diagme-600" />,
    title: "Certified Quality",
    description: "Every vehicle undergoes a rigorous 150-point inspection by certified mechanics and experts."
  },
  {
    icon: <Car className="h-8 w-8 text-diagme-600" />,
    title: "Verified History",
    description: "Complete vehicle history reports to ensure no accidents, flood damage, or odometer tampering."
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-diagme-600" />,
    title: "Extended Warranty",
    description: "Our certified vehicles come with optional extended warranties for additional peace of mind."
  },
  {
    icon: <Calculator className="h-8 w-8 text-diagme-600" />,
    title: "Transparent Pricing",
    description: "Fair market pricing with no hidden fees or unexpected costs during the purchase process."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-silver-50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-diagme-100 bg-diagme-50 px-3 py-1 mb-4">
            <span className="text-xs font-medium text-diagme-800">Why Choose Diagme</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            The Diagme Certification Difference
          </h2>
          <p className="text-charcoal-600 text-lg">
            Our certification process ensures you only get the highest quality vehicles, thoroughly inspected and verified for your peace of mind.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection 
              key={index}
              delay={index * 100}
              className="bg-white rounded-xl p-6 border border-silver-100 shadow-sm"
            >
              <div className="bg-diagme-50 rounded-lg w-14 h-14 flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-charcoal-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-charcoal-600">
                {benefit.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
