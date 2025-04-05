
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard, { ServiceProps } from '../components/ServiceCard';
import { Search } from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sample services data
  const allServices: ServiceProps[] = [
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
      title: "Basic Grooming",
      description: "Basic grooming service including bath and brush out.",
      price: 25,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      category: "grooming"
    },
    {
      id: 3,
      title: "Daily Dog Walking",
      description: "Regular walks for your dog to stay healthy and happy while you're busy.",
      price: 20,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      category: "walking"
    },
    {
      id: 4,
      title: "Weekend Dog Walking",
      description: "Weekend walks for your dog when you're out having fun.",
      price: 25,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      category: "walking"
    },
    {
      id: 5,
      title: "Overnight Pet Sitting",
      description: "Loving care for your pets in your home while you're away. Includes feeding, play time, and companionship.",
      price: 45,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "sitting"
    },
    {
      id: 6,
      title: "Vacation Pet Sitting",
      description: "Extended pet sitting for when you're on vacation. Daily visits, feeding, and care.",
      price: 40,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "sitting"
    }
  ];
  
  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? service.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-petti-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-petti-dark mb-8">Find the Perfect Service for Your Pet</h1>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <input
                type="text"
                className="petti-input w-full pl-10"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-full ${selectedCategory === null 
                  ? 'bg-petti-primary text-white' 
                  : 'bg-white text-petti-dark border border-petti-primary'}`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full ${selectedCategory === 'grooming' 
                  ? 'bg-petti-primary text-white' 
                  : 'bg-white text-petti-dark border border-petti-primary'}`}
                onClick={() => setSelectedCategory('grooming')}
              >
                Grooming
              </button>
              <button
                className={`px-4 py-2 rounded-full ${selectedCategory === 'walking' 
                  ? 'bg-petti-primary text-white' 
                  : 'bg-white text-petti-dark border border-petti-primary'}`}
                onClick={() => setSelectedCategory('walking')}
              >
                Walking
              </button>
              <button
                className={`px-4 py-2 rounded-full ${selectedCategory === 'sitting' 
                  ? 'bg-petti-primary text-white' 
                  : 'bg-white text-petti-dark border border-petti-primary'}`}
                onClick={() => setSelectedCategory('sitting')}
              >
                Sitting
              </button>
            </div>
          </div>
          
          {/* Services grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No services found matching your criteria.</p>
              <button 
                className="mt-4 petti-button px-4 py-2 text-white petti-gradient"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
