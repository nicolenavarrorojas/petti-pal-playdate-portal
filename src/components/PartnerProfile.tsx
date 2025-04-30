
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const PartnerProfile = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [editing, setEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 987-6543",
    description: "Certified pet groomer with over 5 years of experience working with all breeds of dogs and cats. I specialize in creating stress-free grooming experiences for anxious pets.",
    address: "123 Pet Avenue, New York, NY 10001",
    instagram: "https://instagram.com/sarahgroomer",
    facebook: "https://facebook.com/sarahpetcare",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    profileImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    galleryImages: [
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
    ],
    services: [
      {
        id: 1,
        title: "Premium Pet Grooming",
        description: "Professional grooming service including bath, haircut, nail trimming, and ear cleaning.",
        price: 35,
        category: "grooming"
      },
      {
        id: 2,
        title: "Daily Dog Walking",
        description: "Regular walks for your dog to stay healthy and happy while you're busy.",
        price: 20,
        category: "walking"
      }
    ]
  });

  const [formData, setFormData] = useState({
    name: profileData.name,
    email: profileData.email,
    phone: profileData.phone,
    description: profileData.description,
    address: profileData.address,
    instagram: profileData.instagram,
    facebook: profileData.facebook,
    linkedin: profileData.linkedin,
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      description: formData.description,
      address: formData.address,
      instagram: formData.instagram,
      facebook: formData.facebook,
      linkedin: formData.linkedin
    });
    setEditing(false);
    // In a real app, this would also save the data to your backend
  };

  const handleCancel = () => {
    setFormData({
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
      description: profileData.description,
      address: profileData.address,
      instagram: profileData.instagram,
      facebook: profileData.facebook,
      linkedin: profileData.linkedin,
      password: "",
      confirmPassword: ""
    });
    setEditing(false);
  };

  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleDeleteService = (id: number) => {
    // In a real app, this would also delete the service from your backend
    setProfileData({
      ...profileData,
      services: profileData.services.filter(service => service.id !== id)
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="petti-card mb-8">
          <CardHeader className="border-b border-muted pb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative">
                <Avatar className="profile-photo">
                  <AvatarImage src={avatarFile ? URL.createObjectURL(avatarFile) : profileData.profileImage} alt={profileData.name} />
                  <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {editing && (
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                    <label htmlFor="avatarUpload" className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </label>
                    <input
                      type="file"
                      id="avatarUpload"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold text-center md:text-left">
                  {profileData.name}
                </CardTitle>
                <div className="partner-badges mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="badge verified-badge inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Verified
                  </span>
                  <span className="badge experience-badge px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">5+ Years Experience</span>
                </div>
              </div>
              {!editing && (
                <Button 
                  onClick={() => setEditing(true)} 
                  variant="outline"
                  className="petti-button-accent"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit Profile
                </Button>
              )}
            </div>
          </CardHeader>
          
          <div className="tab-container border-b border-muted">
            <button 
              className={`tab ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              Profile Info
            </button>
            <button 
              className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Gallery
            </button>
            <button 
              className={`tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              My Services
            </button>
          </div>
          
          <CardContent className="pt-6">
            {activeTab === 'info' && (
              <>
                {editing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-section">
                      <h2 className="form-section-title">Personal Information</h2>
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description" className="form-label">Personal Description</label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                          rows={4}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-section">
                      <h2 className="form-section-title">Address</h2>
                      <div className="form-group">
                        <label htmlFor="address" className="form-label">Full Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-section">
                      <h2 className="form-section-title">Social Media</h2>
                      <div className="form-group">
                        <label htmlFor="instagram" className="form-label">Instagram URL</label>
                        <input
                          type="url"
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="facebook" className="form-label">Facebook URL</label>
                        <input
                          type="url"
                          id="facebook"
                          name="facebook"
                          value={formData.facebook}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="linkedin" className="form-label">LinkedIn URL</label>
                        <input
                          type="url"
                          id="linkedin"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="form-section">
                      <h2 className="form-section-title">Password</h2>
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">New Password (leave blank to keep current)</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="petti-input w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-4 justify-end pt-4">
                      <Button 
                        type="button" 
                        onClick={handleCancel} 
                        variant="outline"
                        className="outline-button"
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit"
                        className="petti-button"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="profile-section mb-8">
                      <h2 className="section-title mb-4">Personal Information</h2>
                      <div className="space-y-4">
                        <div className="profile-info">
                          <div className="info-label">Full Name:</div>
                          <div className="info-value">{profileData.name}</div>
                        </div>
                        <div className="profile-info">
                          <div className="info-label">Email:</div>
                          <div className="info-value">{profileData.email}</div>
                        </div>
                        <div className="profile-info">
                          <div className="info-label">Phone Number:</div>
                          <div className="info-value">{profileData.phone}</div>
                        </div>
                        <div className="profile-info">
                          <div className="info-label">Password:</div>
                          <div className="info-value">••••••••</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="profile-section mb-8">
                      <h2 className="section-title mb-4">Partner Details</h2>
                      <div className="space-y-4">
                        <div className="profile-info">
                          <div className="info-label">Personal Description:</div>
                          <div className="info-value">{profileData.description}</div>
                        </div>
                        <div className="profile-info">
                          <div className="info-label">Address:</div>
                          <div className="info-value">{profileData.address}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="profile-section">
                      <h2 className="section-title mb-4">Social Media</h2>
                      <div className="social-links flex flex-wrap gap-4">
                        {profileData.instagram && (
                          <a href={profileData.instagram} target="_blank" rel="noopener noreferrer" className="social-link flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            Instagram
                          </a>
                        )}
                        {profileData.facebook && (
                          <a href={profileData.facebook} target="_blank" rel="noopener noreferrer" className="social-link flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            Facebook
                          </a>
                        )}
                        {profileData.linkedin && (
                          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            
            {activeTab === 'gallery' && (
              <div className="profile-section">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="section-title">My Photo Gallery</h2>
                  <label htmlFor="addGalleryImages" className="cursor-pointer button small-button outline-button inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    Add Photos
                  </label>
                  <input type="file" id="addGalleryImages" accept="image/*" multiple className="hidden" />
                </div>
                
                <div className="photo-gallery">
                  {profileData.galleryImages.length > 0 ? (
                    profileData.galleryImages.map((image, index) => (
                      <div className="gallery-item" key={index}>
                        <img src={image} alt={`Gallery image ${index + 1}`} />
                      </div>
                    ))
                  ) : (
                    <div className="empty-state text-center py-8 col-span-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-muted-foreground">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      <p className="text-lg mb-4 text-muted-foreground">You haven't added any photos yet</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'services' && (
              <div className="profile-section">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="section-title">My Services</h2>
                  <Button className="petti-button-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Service
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {profileData.services.length > 0 ? (
                    profileData.services.map(service => (
                      <div className="service-card border border-muted rounded-xl p-4" key={service.id}>
                        <div className="service-header flex justify-between items-center mb-2">
                          <h3 className="service-title font-semibold text-lg">{service.title}</h3>
                          <span className="service-price text-petti-primary font-bold">${service.price}/hour</span>
                        </div>
                        <p className="service-description text-muted-foreground mb-4">{service.description}</p>
                        <div className="service-footer flex justify-between items-center pt-2 border-t border-muted">
                          <div className="service-category px-3 py-1 bg-muted text-xs rounded-full">
                            {service.category}
                          </div>
                          <div className="service-actions flex gap-2">
                            <Button variant="outline" size="sm" className="secondary-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                              Edit
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="destructive-button text-red-500 hover:bg-red-50"
                              onClick={() => handleDeleteService(service.id)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="empty-state text-center py-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-muted-foreground">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12h8"></path>
                      </svg>
                      <p className="text-lg mb-4 text-muted-foreground">You haven't added any services yet</p>
                      <Button className="petti-button">Add Your First Service</Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerProfile;
