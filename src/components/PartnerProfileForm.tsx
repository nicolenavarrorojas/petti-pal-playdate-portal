
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const PartnerProfileForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    address: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    termsAgreement: false
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [profileImagePreview, setProfileImagePreview] = useState<string>("https://images.unsplash.com/placeholder-avatars/extra-large.jpg");
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      setGalleryImages(prevImages => [...prevImages, ...files]);
      
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setGalleryPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages(prevImages => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
    
    setGalleryPreviews(prevPreviews => {
      const newPreviews = [...prevPreviews];
      URL.revokeObjectURL(newPreviews[index]);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!profileImage) {
      alert("Please upload a profile picture");
      return;
    }
    
    if (!formData.description || !formData.address || !formData.termsAgreement) {
      alert("Please fill in all required fields and accept the terms");
      return;
    }

    // In a real app, submit the form data to your backend
    console.log("Form submitted:", { ...formData, profileImage, galleryImages });
    
    // Redirect or show success message
    alert("Partner profile created successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="petti-card">
          <CardHeader className="text-center border-b border-muted pb-6">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#021059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="registration-icon">
                <path d="M18 19v-5.5a1.5 1.5 0 0 0-3 0v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 0-3 0v10.5a1.5 1.5 0 0 1-3 0v-8a1.5 1.5 0 0 0-3 0V19"></path>
              </svg>
            </div>
            <CardTitle className="text-2xl font-bold">Become a Partner</CardTitle>
            
            <div className="flex justify-between items-center mt-6">
              <div className="partner-registration-steps">
                <div className="step active">
                  <div className="step-number">1</div>
                  <div className="step-label">Account Info</div>
                </div>
                <div className="step-connector"></div>
                <div className="step active">
                  <div className="step-number">2</div>
                  <div className="step-label">Partner Profile</div>
                </div>
                <div className="step-connector"></div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-label">Add Services</div>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="form-section">
                <h2 className="form-section-title">Personal Description</h2>
                <div className="form-group">
                  <label htmlFor="description" className="form-label">Tell us about your experience and expertise with pets</label>
                  <textarea 
                    id="description" 
                    name="description"
                    rows={4}
                    className="petti-input w-full"
                    placeholder="Describe your services, experience, and what makes you a great pet care provider..."
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-section">
                <h2 className="form-section-title">Contact Information</h2>
                <div className="form-group">
                  <label htmlFor="address" className="form-label">Full Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="123 Main Street, City, State, Zip"
                    className="petti-input w-full"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-section">
                <h2 className="form-section-title">Social Media</h2>
                <div className="form-group">
                  <label htmlFor="instagram" className="form-label">Instagram URL (optional)</label>
                  <input
                    type="url"
                    id="instagram"
                    name="instagram"
                    placeholder="https://instagram.com/yourusername"
                    className="petti-input w-full"
                    value={formData.instagram}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="facebook" className="form-label">Facebook URL (optional)</label>
                  <input
                    type="url"
                    id="facebook"
                    name="facebook"
                    placeholder="https://facebook.com/yourpage"
                    className="petti-input w-full"
                    value={formData.facebook}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="linkedin" className="form-label">LinkedIn URL (optional)</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="petti-input w-full"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-section">
                <h2 className="form-section-title">Profile Images</h2>
                
                <div className="form-group">
                  <label className="image-upload-label form-label">Profile Picture (required)</label>
                  <div className="profile-image-upload flex flex-col md:flex-row items-center gap-6">
                    <div className="profile-image-preview mb-4 md:mb-0">
                      <img 
                        id="profileImagePreview"
                        src={profileImagePreview} 
                        alt="Profile Preview"
                        className="profile-photo"
                      />
                    </div>
                    <label htmlFor="profileImage" className="image-upload-button button primary-button cursor-pointer inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      Upload Profile Picture
                    </label>
                    <input 
                      type="file" 
                      id="profileImage" 
                      accept="image/*" 
                      className="hidden"
                      onChange={handleProfileImageChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="image-upload-label form-label">Photo Gallery (optional)</label>
                  <div className="gallery-image-upload">
                    <div className="gallery-preview photo-gallery" id="galleryPreview">
                      {galleryPreviews.length > 0 ? (
                        galleryPreviews.map((preview, index) => (
                          <div className="gallery-item relative" key={index}>
                            <img src={preview} alt={`Gallery Preview ${index + 1}`} />
                            <button
                              type="button"
                              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                              onClick={() => removeGalleryImage(index)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="empty-gallery-message">No photos uploaded yet</div>
                      )}
                    </div>
                    <label htmlFor="galleryImages" className="image-upload-button button primary-button mt-4 cursor-pointer inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      Upload Gallery Photos
                    </label>
                    <input 
                      type="file" 
                      id="galleryImages" 
                      accept="image/*" 
                      multiple 
                      className="hidden"
                      onChange={handleGalleryImagesChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group terms-section">
                <div className="checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    id="termsAgreement" 
                    name="termsAgreement" 
                    checked={formData.termsAgreement}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <label htmlFor="termsAgreement">
                    I agree to the <a href="#" className="text-link">Partner Terms of Service</a> and <a href="#" className="text-link">Privacy Policy</a>
                  </label>
                </div>
              </div>
              
              <div className="form-actions flex gap-4 justify-end">
                <Button type="button" variant="outline" className="outline-button">Cancel</Button>
                <Button type="submit" className="petti-button">Complete Profile</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerProfileForm;
