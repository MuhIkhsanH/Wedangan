"use client"
import { useEffect } from 'react'

export default function AOSWrapper({ children }) {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
      });
    });
  }, []);

  return <>{children}</>;
} 