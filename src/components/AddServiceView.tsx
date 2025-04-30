
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const AddServiceView = () => {
  const [formData, setFormData] = useState({
    serviceCategory: '',
    serviceTitle: '',
    serviceDescription: '',
    servicePrice: '',
    serviceDuration: '1',
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: true
    },
    petTypes: {
      dogs: true,
      cats: true,
      birds: false,
      fish: false,
      reptiles: false,
      smallpets: false
    },
    serviceNotes: ''
  });

  const [serviceImage, setServiceImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('https://images.unsplash.com/photo-1649972904349-6e44c42644a7');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;
    
    if (name.startsWith('availability')) {
      const day = value;
      setFormData({
        ...formData,
        availability: {
          ...formData.availability,
          [day]: checked
        }
      });
    } else if (name.startsWith('petTypes')) {
      const petType = value;
      setFormData({
        ...formData,
        petTypes: {
          ...formData.petTypes,
          [petType]: checked
        }
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setServiceImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    const categoryText = e.target.options[e.target.selectedIndex].text;
    
    setFormData({
      ...formData,
      serviceCategory: category,
      serviceTitle: formData.serviceTitle || `Professional ${categoryText}`
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.serviceCategory || !formData.serviceTitle || !formData.serviceDescription || !formData.servicePrice) {
      alert('Please fill in all required fields');
      return;
    }
    
    // In a real app, this would submit the service data to your backend
    console.log('Form submitted:', { ...formData, serviceImage });
    
    // Show success message and redirect
    alert('Service added successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="petti-card">
          <CardHeader className="text-center border-b border-muted pb-6">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#021059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
                <path d="M18 19v-5.5a1.5 1.5 0 0 0-3 0v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 0-3 0v10.5a1.5 1.5 0 0 1-3 0v-8a1.5 1.5 0 0 0-3 0V19"></path>
              </svg>
            </div>
            <CardTitle className="text-2xl font-bold">Add New Service</CardTitle>
          </CardHeader>
          
          <CardContent className="pt-6">
            <form id="addServiceForm" onSubmit={handleSubmit} className="space-y-8">
              <div className="form-section">
                <h2 className="form-section-title mb-4">Service Information</h2>
                
                <div className="form-group">
                  <label htmlFor="serviceCategory" className="form-label">Service Category</label>
                  <select 
                    id="serviceCategory" 
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleCategoryChange}
                    className="petti-input w-full" 
                    required
                  >
                    <option value="" disabled>Select a service category</option>
                    <option value="grooming">Pet Grooming</option>
                    <option value="walking">Dog Walking</option>
                    <option value="sitting">Pet Sitting</option>
                    <option value="training">Pet Training</option>
                    <option value="daycare">Pet Daycare</option>
                    <option value="boarding">Pet Boarding</option>
                    <option value="transportation">Pet Transportation</option>
                    <option value="nutrition">Pet Nutrition Consultation</option>
                    <option value="behavioral">Behavioral Training</option>
                    <option value="photography">Pet Photography</option>
                    <option value="therapy">Pet Therapy</option>
                    <option value="massage">Pet Massage</option>
                    <option value="swimming">Pet Swimming Lessons</option>
                    <option value="healthcare">Basic Healthcare</option>
                    <option value="cleaning">Pet Area Cleaning</option>
                    <option value="breeding">Breeding Consultation</option>
                    <option value="adoption">Adoption Services</option>
                    <option value="playdate">Pet Playdate Organization</option>
                    <option value="pawdicure">Pawdicure</option>
                    <option value="teethcleaning">Teeth Cleaning</option>
                    <option value="birthing">Birthing Assistance</option>
                    <option value="acupuncture">Pet Acupuncture</option>
                    <option value="diet">Custom Diet Planning</option>
                    <option value="exercise">Exercise Programs</option>
                    <option value="homeopathy">Pet Homeopathy</option>
                    <option value="aromatherapy">Pet Aromatherapy</option>
                    <option value="travelprep">Travel Preparation</option>
                    <option value="grooming-mobile">Mobile Grooming</option>
                    <option value="toys">Custom Toy Creation</option>
                    <option value="funeral">Pet Funeral Services</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="serviceTitle" className="form-label">Service Title</label>
                  <input 
                    type="text" 
                    id="serviceTitle" 
                    name="serviceTitle"
                    value={formData.serviceTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Premium Dog Grooming" 
                    className="petti-input w-full"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="serviceDescription" className="form-label">Service Description</label>
                  <textarea 
                    id="serviceDescription" 
                    name="serviceDescription"
                    value={formData.serviceDescription}
                    onChange={handleInputChange}
                    rows={4} 
                    className="petti-input w-full"
                    placeholder="Describe your service in detail. What's included, what to expect, etc." 
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="servicePrice" className="form-label">Price per Hour (USD)</label>
                  <div className="price-input-container relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                    <input 
                      type="number" 
                      id="servicePrice" 
                      name="servicePrice"
                      value={formData.servicePrice}
                      onChange={handleInputChange}
                      min="5" 
                      step="0.01" 
                      placeholder="25.00" 
                      className="petti-input w-full pl-8"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2 className="form-section-title mb-4">Service Details</h2>
                
                <div className="form-group">
                  <label htmlFor="serviceDuration" className="form-label">Typical Duration (hours)</label>
                  <select 
                    id="serviceDuration" 
                    name="serviceDuration"
                    value={formData.serviceDuration}
                    onChange={handleInputChange}
                    className="petti-input w-full"
                    required
                  >
                    <option value="0.5">30 minutes</option>
                    <option value="1">1 hour</option>
                    <option value="1.5">1 hour 30 minutes</option>
                    <option value="2">2 hours</option>
                    <option value="2.5">2 hours 30 minutes</option>
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                    <option value="5">5 hours</option>
                    <option value="6">6 hours</option>
                    <option value="7">7 hours</option>
                    <option value="8">8 hours (Full day)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label mb-2 block">Service Availability</label>
                  <div className="checkbox-grid grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(formData.availability).map(([day, checked]) => (
                      <div className="checkbox-wrapper flex items-center" key={day}>
                        <input 
                          type="checkbox" 
                          id={day} 
                          name={`availability`} 
                          value={day}
                          checked={checked}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor={day} className="capitalize">{day}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="serviceImage" className="form-label mb-2 block">Service Image</label>
                  <div className="service-image-upload flex flex-col md:flex-row items-center gap-6">
                    <div className="service-image-preview mb-4 md:mb-0">
                      <img 
                        id="serviceImagePreview" 
                        src={imagePreview}
                        alt="Service Preview" 
                        className="w-40 h-40 object-cover rounded-lg border-2 border-muted"
                      />
                    </div>
                    <label htmlFor="serviceImageInput" className="image-upload-button button primary-button cursor-pointer inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      Upload Image
                    </label>
                    <input 
                      type="file" 
                      id="serviceImageInput"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2 className="form-section-title mb-4">Additional Information</h2>
                
                <div className="form-group">
                  <label className="form-label mb-2 block">Pet Types (select all that apply)</label>
                  <div className="checkbox-grid grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(formData.petTypes).map(([petType, checked]) => (
                      <div className="checkbox-wrapper flex items-center" key={petType}>
                        <input 
                          type="checkbox" 
                          id={petType} 
                          name={`petTypes`}
                          value={petType}
                          checked={checked}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor={petType} className="capitalize">{petType}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="serviceNotes" className="form-label">Additional Notes (optional)</label>
                  <textarea 
                    id="serviceNotes" 
                    name="serviceNotes"
                    value={formData.serviceNotes}
                    onChange={handleInputChange}
                    rows={3} 
                    className="petti-input w-full"
                    placeholder="Any special requirements, limitations, or additional information clients should know..."
                  ></textarea>
                </div>
              </div>
              
              <div className="form-actions flex gap-4 justify-end">
                <Button type="button" variant="outline" className="outline-button">Cancel</Button>
                <Button type="submit" className="petti-button">Add Service</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddServiceView;
