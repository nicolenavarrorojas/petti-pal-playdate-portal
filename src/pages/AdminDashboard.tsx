
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Mock service data
const initialServices = [
  { id: 1, name: "Pet Grooming", price: 50, description: "Professional grooming services for your pet" },
  { id: 2, name: "Dog Walking", price: 25, description: "Daily walks for your dog" },
  { id: 3, name: "Pet Sitting", price: 40, description: "In-home pet sitting while you're away" }
];

const AdminDashboard = () => {
  const [services, setServices] = useState(initialServices);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if admin is logged in - in a real app, would check auth token/state
    const checkAuth = () => {
      // Simulating auth check for demo
      const isAdmin = localStorage.getItem('isAdmin') === 'true';
      
      if (!isAdmin) {
        toast({
          title: "Authentication required",
          description: "Please login as administrator",
          variant: "destructive"
        });
        navigate('/admin');
      } else {
        setIsAuthenticated(true);
      }
    };
    
    checkAuth();
  }, [navigate]);

  // Mock functions for service management
  const addService = () => {
    toast({
      title: "Feature coming soon",
      description: "The ability to add services will be implemented soon"
    });
  };

  const editService = (id: number) => {
    toast({
      title: "Feature coming soon",
      description: "The ability to edit services will be implemented soon"
    });
  };

  const deleteService = (id: number) => {
    // Simple mock delete functionality
    setServices(services.filter(service => service.id !== id));
    toast({
      title: "Service deleted",
      description: "The service has been removed"
    });
  };

  if (!isAuthenticated) {
    return <div className="flex justify-center items-center h-screen">Checking authentication...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-8 px-4 bg-petti-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-petti-dark">Service Management</h1>
            <Button onClick={addService} className="flex items-center gap-1">
              <PlusCircle className="h-4 w-4" />
              Add Service
            </Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service) => (
                  <tr key={service.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{service.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${service.price}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{service.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" onClick={() => editService(service.id)} className="text-blue-600 hover:text-blue-900 mr-2">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteService(service.id)} className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
