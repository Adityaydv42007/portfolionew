import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultPhoto from '../assets/images/aditya_profile.jpg';

interface PhotoContextType {
  photoUrl: string;
  setCustomPhoto: (dataUrl: string) => void;
  resetPhoto: () => void;
  isCustom: boolean;
}

const PhotoContext = createContext<PhotoContextType>({
  photoUrl: defaultPhoto,
  setCustomPhoto: () => {},
  resetPhoto: () => {},
  isCustom: false,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('aditya_portfolio_photo');
      return saved || defaultPhoto;
    } catch {
      return defaultPhoto;
    }
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem('aditya_portfolio_photo'));
    } catch {
      return false;
    }
  });

  const setCustomPhoto = (dataUrl: string) => {
    try {
      localStorage.setItem('aditya_portfolio_photo', dataUrl);
      setPhotoUrl(dataUrl);
      setIsCustom(true);
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
      setPhotoUrl(dataUrl);
      setIsCustom(true);
    }
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem('aditya_portfolio_photo');
    } catch {
      // ignore
    }
    setPhotoUrl(defaultPhoto);
    setIsCustom(false);
  };

  return (
    <PhotoContext.Provider value={{ photoUrl, setCustomPhoto, resetPhoto, isCustom }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(PhotoContext);
