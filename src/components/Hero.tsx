
import { PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-petti-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-petti-dark sm:text-5xl md:text-6xl">
                <span className="block">Loving care for</span>
                <span className="block text-petti-primary">your furry friends</span>
              </h1>
              <div className="paw-animate flex mt-4 justify-center lg:justify-start">
                <PawPrint className="h-6 w-6 text-petti-primary mr-1" />
                <PawPrint className="h-6 w-6 text-petti-primary mr-1" />
                <PawPrint className="h-6 w-6 text-petti-primary mr-1" />
                <PawPrint className="h-6 w-6 text-petti-primary mr-1" />
                <PawPrint className="h-6 w-6 text-petti-primary" />
              </div>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Professional pet grooming, walking, and sitting services. Treat your pet to the care they deserve while you're away.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-petti-primary hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    Find Services
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-petti-primary bg-white border-petti-primary hover:bg-petti-light md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
          alt="Happy pet"
        />
      </div>
    </div>
  );
};

export default Hero;
