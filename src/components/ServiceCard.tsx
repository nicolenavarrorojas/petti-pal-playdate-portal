
import { Link } from 'react-router-dom';

export interface ServiceProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'grooming' | 'walking' | 'sitting';
}

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  const categoryIcons = {
    grooming: '✂️',
    walking: '🦮',
    sitting: '🏠'
  };

  return (
    <div className="petti-card overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow">
          {categoryIcons[service.category]}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-petti-dark">{service.title}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{service.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-petti-primary font-bold text-lg">${service.price}/hour</span>
          <Link 
            to={`/payment?service=${service.id}`}
            className="petti-button px-4 py-2 text-white bg-petti-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
