
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple admin validation - in a real app, this would be a server request
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        // In a real app, you would set auth token / state here
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard"
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive"
        });
        // For debugging purposes, log the entered credentials
        console.log(`Login attempt with username: "${username}" and password: "${password}"`);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-petti-light">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 w-full">
            <div className="flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-petti-primary" />
              <span className="ml-2 text-2xl font-bold text-petti-dark">Admin Login</span>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="admin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login as Administrator"}
                </Button>
              </div>
            </form>
            
            <div className="mt-6">
              <p className="text-sm text-center text-gray-500">
                This area is restricted to site administrators only.
              </p>
              <p className="text-xs text-center text-gray-500 mt-2">
                (Use username: "admin" and password: "admin123")
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
