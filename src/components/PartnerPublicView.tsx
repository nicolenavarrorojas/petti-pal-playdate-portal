
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const PartnerPublicView = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  // Mock partner data
  const partnerData = {
    name: "Sarah Johnson",
    description: "Certified pet groomer with over 5 years of experience working with all breeds of dogs and cats. I specialize in creating stress-free grooming experiences for anxious pets. My services include bathing, haircuts, nail trimming, and ear cleaning tailored to each pet's specific needs.\n\nI'm passionate about animal care and comfort, and I take pride in making sure each pet leaves looking and feeling their best. I use only pet-friendly, high-quality products that are gentle on your pet's skin and coat.\n\nWhether your fur baby needs a basic bath or a full makeover, I'm dedicated to providing exceptional service in a calm, loving environment. Looking forward to meeting you and your furry friends!",
    location: "New York, NY",
    memberSince: "January 2022",
    servicesProvided: "Pet Grooming, Dog Walking",
    rating: 4.8,
    reviewCount: 56,
    profileImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    galleryImages: [
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    ],
    social: {
      instagram: "https://instagram.com/sarahgroomer",
      facebook: "https://facebook.com/sarahpetcare",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    services: [
      {
        id: 1,
        title: "Premium Pet Grooming",
        description: "Professional grooming service including bath, haircut, nail trimming, and ear cleaning.",
        price: 35
      },
      {
        id: 2,
        title: "Daily Dog Walking",
        description: "Regular walks for your dog to stay healthy and happy while you're busy.",
        price: 20
      }
    ],
    reviews: {
      average: 4.8,
      count: 56,
      distribution: {
        5: 80,
        4: 15,
        3: 3,
        2: 1,
        1: 1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <a href="#" className="back-link inline-flex items-center mb-6 text-petti-primary hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Services
        </a>
        
        <Card className="petti-card mb-8">
          <CardHeader className="border-b border-muted pb-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="profile-photo w-24 h-24">
                <AvatarImage src={partnerData.profileImage} alt={partnerData.name} />
                <AvatarFallback>{partnerData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <CardTitle className="text-2xl font-bold mb-2">{partnerData.name}</CardTitle>
                
                <div className="partner-rating mb-3">
                  <div className="stars text-yellow-500 mb-1">★★★★★</div>
                  <span className="rating-count text-sm text-muted-foreground">
                    {partnerData.rating} ({partnerData.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="partner-badges flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <span className="badge verified-badge inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Verified
                  </span>
                  <span className="badge experience-badge px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">5+ Years Experience</span>
                </div>
                
                <div className="social-links flex flex-wrap gap-3 justify-center md:justify-start">
                  {partnerData.social.instagram && (
                    <a href={partnerData.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link inline-flex items-center gap-1 text-sm text-gray-600 hover:text-petti-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </a>
                  )}
                  {partnerData.social.facebook && (
                    <a href={partnerData.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link inline-flex items-center gap-1 text-sm text-gray-600 hover:text-petti-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </a>
                  )}
                  {partnerData.social.linkedin && (
                    <a href={partnerData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link inline-flex items-center gap-1 text-sm text-gray-600 hover:text-petti-primary">
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
            </div>
          </CardHeader>
          
          <div className="tab-container border-b border-muted">
            <button 
              className={`tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Photo Gallery
            </button>
            <button 
              className={`tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button 
              className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
          
          <CardContent className="pt-6">
            {activeTab === 'about' && (
              <div className="partner-about-section">
                <h2 className="section-title mb-4">About {partnerData.name.split(' ')[0]}</h2>
                
                <div className="partner-description mb-8">
                  {partnerData.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                
                <div className="partner-details grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="detail-item flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="detail-icon text-petti-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="detail-content">
                      <div className="detail-label text-sm text-gray-500">Location</div>
                      <div className="detail-value font-medium">{partnerData.location}</div>
                    </div>
                  </div>
                  <div className="detail-item flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="detail-icon text-petti-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path>
                        <path d="M19 15V5a2 2 0 0 0-2-2H4"></path>
                      </svg>
                    </div>
                    <div className="detail-content">
                      <div className="detail-label text-sm text-gray-500">Services Provided</div>
                      <div className="detail-value font-medium">{partnerData.servicesProvided}</div>
                    </div>
                  </div>
                  <div className="detail-item flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="detail-icon text-petti-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.5a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"></path>
                      </svg>
                    </div>
                    <div className="detail-content">
                      <div className="detail-label text-sm text-gray-500">Member Since</div>
                      <div className="detail-value font-medium">{partnerData.memberSince}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'gallery' && (
              <div className="photo-gallery-section">
                <h2 className="section-title mb-6">Photo Gallery</h2>
                
                <div className="photo-gallery">
                  {partnerData.galleryImages.map((image, index) => (
                    <div className="gallery-item" key={index}>
                      <img src={image} alt={`Gallery image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'services' && (
              <div className="partner-services-section">
                <h2 className="section-title mb-6">Services Offered</h2>
                
                <div className="public-services-list space-y-6">
                  {partnerData.services.map(service => (
                    <div className="service-card border border-muted rounded-xl p-6" key={service.id}>
                      <div className="service-header flex justify-between items-center mb-3">
                        <h3 className="service-title text-xl font-semibold">{service.title}</h3>
                        <span className="service-price text-lg font-bold text-petti-primary">${service.price}/hour</span>
                      </div>
                      <p className="service-description text-muted-foreground mb-6">{service.description}</p>
                      <Button className="petti-button w-full">Book This Service</Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="partner-reviews-section">
                <h2 className="section-title mb-6">Client Reviews</h2>
                
                <div className="reviews-summary grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="average-rating col-span-1 text-center bg-gray-50 p-6 rounded-xl">
                    <div className="rating-number text-5xl font-bold mb-2">{partnerData.reviews.average}</div>
                    <div className="rating-stars text-yellow-500 mb-1">★★★★★</div>
                    <div className="rating-count text-sm text-muted-foreground">{partnerData.reviews.count} reviews</div>
                  </div>
                  <div className="rating-bars col-span-2">
                    {Object.entries(partnerData.reviews.distribution)
                      .sort((a, b) => Number(b[0]) - Number(a[0]))
                      .map(([stars, percent]) => (
                        <div className="rating-bar flex items-center mb-2" key={stars}>
                          <div className="bar-label w-16 text-sm">{stars} stars</div>
                          <div className="bar-container flex-1 bg-gray-100 h-2 rounded-full mx-3">
                            <div 
                              className="bar-fill bg-yellow-400 h-full rounded-full" 
                              style={{width: `${percent}%`}}
                            ></div>
                          </div>
                          <div className="bar-percent text-sm w-12 text-right">{percent}%</div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                
                <div className="empty-state text-center py-8">
                  <p className="text-muted-foreground mb-4">Be the first to leave a review for {partnerData.name}!</p>
                  <Button className="petti-button-accent">Write a Review</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerPublicView;
