
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const ClientProfileView = () => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    profileImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  });

  const [formData, setFormData] = useState({
    name: profileData.name,
    email: profileData.email,
    phone: profileData.phone,
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      phone: formData.phone
    });
    setEditing(false);
    // In a real app, this would also save the data to your backend
  };

  const handleCancel = () => {
    setFormData({
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="petti-card mb-8">
          <CardHeader className="border-b border-muted pb-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative">
                <Avatar className="profile-photo-sm">
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
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            
            {editing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
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
            )}
          </CardContent>
        </Card>

        <Card className="petti-card">
          <CardHeader className="border-b border-muted">
            <CardTitle className="text-xl">Contracted Services</CardTitle>
          </CardHeader>
          <CardContent className="py-6">
            <div className="contracted-services">
              <div className="empty-state text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-muted-foreground">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12h8"></path>
                </svg>
                <p className="text-lg mb-4 text-muted-foreground">You haven't contracted any services yet.</p>
                <Button className="petti-button">Browse Services</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientProfileView;
