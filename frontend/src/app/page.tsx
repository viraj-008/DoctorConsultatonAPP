'use client'
import Header from '@/components/landing/Header'
import LandingHero from '@/components/landing/LandingHero';
import TesimonialSection from '@/components/landing/TesimonialSection';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Footer } from 'react-day-picker';


export default function Home() {
  const user ={
    type:"pa"
  }
  const router = useRouter()

  useEffect(() => {
    if(user?.type === 'doctor') {
      router.replace('/doctor/dashboard')
    }
  },[user,router])

    if(user?.type === 'doctor'){
    return null;
  }

  return (
      <div className="min-h-screen bg-white">
         <Header showDashboardNav={false}/>
         <main className=''>
          <LandingHero/>
          <TesimonialSection/>
          <Footer/>
         </main>
      </div>
  );
}
