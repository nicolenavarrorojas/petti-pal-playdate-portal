
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ServiceProps } from '../components/ServiceCard';
import { Calendar, Clock, CreditCard, Check } from 'lucide-react';

const Payment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [service, setService] = useState<ServiceProps | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [hours, setHours] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  const location = useLocation();
  
  // Sample services data (in a real app, this would come from an API)
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
  
  useEffect(() => {
    // Get service ID from URL parameters
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('service');
    
    if (serviceId) {
      const foundService = allServices.find(s => s.id === parseInt(serviceId));
      if (foundService) {
        setService(foundService);
        setTotalPrice(foundService.price);
      }
    }
  }, [location]);
  
  useEffect(() => {
    if (service) {
      setTotalPrice(service.price * hours);
    }
  }, [hours, service]);
  
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  
  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    console.log('Processing payment...');
    setTimeout(() => {
      setPaymentComplete(true);
    }, 1500);
  };
  
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-petti-light">
          <div className="text-center">
            <p className="text-xl text-gray-600">No service selected.</p>
            <a 
              href="/services" 
              className="mt-4 inline-block petti-button px-4 py-2 text-white petti-gradient"
            >
              Browse Services
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-petti-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-petti-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${activeStep >= 1 ? 'border-petti-primary' : 'border-gray-300'}`}>
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="mt-2 text-sm">Schedule</span>
              </div>
              
              <div className={`flex-grow border-t-2 ${activeStep >= 2 ? 'border-petti-primary' : 'border-gray-300'}`}></div>
              
              <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-petti-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${activeStep >= 2 ? 'border-petti-primary' : 'border-gray-300'}`}>
                  <CreditCard className="h-5 w-5" />
                </div>
                <span className="mt-2 text-sm">Payment</span>
              </div>
              
              <div className={`flex-grow border-t-2 ${activeStep >= 3 ? 'border-petti-primary' : 'border-gray-300'}`}></div>
              
              <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-petti-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${activeStep >= 3 ? 'border-petti-primary' : 'border-gray-300'}`}>
                  <Check className="h-5 w-5" />
                </div>
                <span className="mt-2 text-sm">Confirmation</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Step 1: Schedule */}
            {activeStep === 1 && (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-petti-dark mb-6">Schedule Your Service</h2>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-petti-dark">{service.title}</h3>
                    <p className="text-gray-600">${service.price}/hour</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                      Select Date
                    </label>
                    <input
                      className="petti-input w-full"
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                      Select Time
                    </label>
                    <input
                      className="petti-input w-full"
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hours">
                      Duration (hours)
                    </label>
                    <select
                      className="petti-input w-full"
                      id="hours"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map(h => (
                        <option key={h} value={h}>{h} hour{h > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Price:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    className="petti-button px-6 py-2 text-white petti-gradient"
                    onClick={handleNext}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Payment */}
            {activeStep === 2 && (
              <div className="p-6">
                <h2 className="text-2xl font-bold text-petti-dark mb-6">Payment Details</h2>
                
                <div className="bg-petti-light rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-petti-dark">Order Summary</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span>{service.title}</span>
                      <span>${service.price}/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span>{hours} hour{hours > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-300 mt-2">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmitPayment}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardName">
                        Name on Card
                      </label>
                      <input
                        className="petti-input w-full"
                        id="cardName"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                        Card Number
                      </label>
                      <input
                        className="petti-input w-full"
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiry">
                          Expiry Date
                        </label>
                        <input
                          className="petti-input w-full"
                          id="expiry"
                          type="text"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                          CVC
                        </label>
                        <input
                          className="petti-input w-full"
                          id="cvc"
                          type="text"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      className="petti-button px-6 py-2 text-petti-primary border border-petti-primary bg-white"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="petti-button px-6 py-2 text-white petti-gradient"
                    >
                      Complete Payment
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Step 3: Confirmation */}
            {activeStep === 3 && (
              <div className="p-6 text-center">
                {paymentComplete ? (
                  <div className="py-8">
                    <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full text-green-600 mb-6">
                      <Check className="h-12 w-12" />
                    </div>
                    <h2 className="text-2xl font-bold text-petti-dark mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-6">
                      Your booking for {service.title} has been confirmed.
                    </p>
                    <div className="bg-petti-light rounded-lg p-4 max-w-sm mx-auto text-left">
                      <h3 className="font-semibold text-petti-dark mb-2">Booking Details</h3>
                      <div className="space-y-2">
                        <div className="flex">
                          <Calendar className="h-5 w-5 text-petti-primary mr-2" />
                          <span>{date || "Date not set"}</span>
                        </div>
                        <div className="flex">
                          <Clock className="h-5 w-5 text-petti-primary mr-2" />
                          <span>{time || "Time not set"} ({hours} hour{hours > 1 ? 's' : ''})</span>
                        </div>
                        <div className="flex font-semibold">
                          <CreditCard className="h-5 w-5 text-petti-primary mr-2" />
                          <span>Total: ${totalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/"
                        className="petti-button px-6 py-2 text-white petti-gradient inline-block"
                      >
                        Back to Home
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="py-8">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-petti-primary mx-auto mb-6"></div>
                    <h2 className="text-xl font-semibold text-petti-dark">Processing your payment...</h2>
                    <p className="text-gray-600 mt-2">Please wait while we confirm your booking.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;
