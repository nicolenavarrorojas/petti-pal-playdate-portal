
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard, { ServiceProps } from '../components/ServiceCard';
import Footer from '../components/Footer';
import { PawPrint, Calendar, MapPin } from 'lucide-react';

const Index = () => {
  // Sample services
  const featuredServices: ServiceProps[] = [
    {
      id: 1,
      title: "Premium Pet Grooming",
      description: "Professional grooming service including bath, haircut, nail trimming, and ear cleaning.",
      price: 35,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      category: "grooming"
    },
    {
      id: 2,
      title: "Daily Dog Walking",
      description: "Regular walks for your dog to stay healthy and happy while you're busy.",
      price: 20,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      category: "walking"
    },
    {
      id: 3,
      title: "Overnight Pet Sitting",
      description: "Loving care for your pets in your home while you're away. Includes feeding, play time, and companionship.",
      price: 45,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "sitting"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-petti-dark sm:text-4xl">
              Our Pet Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose from our range of professional pet care services
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-petti-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-petti-dark sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Simple steps to get professional care for your pets
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-petti-primary rounded-full text-white mb-4">
                <PawPrint className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-petti-dark">Choose a Service</h3>
              <p className="mt-2 text-gray-500">
                Browse through our variety of pet services and select what your pet needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-petti-primary rounded-full text-white mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-petti-dark">Book an Appointment</h3>
              <p className="mt-2 text-gray-500">
                Select a convenient date and time that works for you and your pet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-petti-primary rounded-full text-white mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-petti-dark">Get Professional Care</h3>
              <p className="mt-2 text-gray-500">
                Our experienced professionals will provide excellent care for your pet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 petti-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to pamper your pet?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white opacity-90">
            Join Petti today and give your furry friend the care they deserve.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/register"
              className="petti-button px-8 py-3 text-petti-primary bg-white font-bold rounded-full shadow-lg"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
