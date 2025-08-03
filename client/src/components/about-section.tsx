import { Shield, Wrench, Handshake } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional locksmith cutting car keys" 
              className="rounded-2xl shadow-xl" 
            />
          </div>

          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose AutoKey Tbilisi?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're Tbilisi's most trusted automotive locksmith service, combining years of experience with cutting-edge technology to solve your car key problems quickly and reliably.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15min</div>
                <div className="text-gray-600">Average Response</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                  <p className="text-gray-600">Fully licensed locksmith service with comprehensive insurance coverage.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Wrench className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Equipment</h4>
                  <p className="text-gray-600">State-of-the-art key cutting and programming equipment in every van.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Satisfaction Guarantee</h4>
                  <p className="text-gray-600">100% satisfaction guarantee on all our automotive locksmith services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
