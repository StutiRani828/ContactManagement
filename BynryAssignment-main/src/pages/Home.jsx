import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../components/ProfileCard';
import Navbar from '../components/Navbar/Navbar';
import './home.css'
import { HashLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profiles);
  const location = useLocation();
  const profiles = location.state.userProfiles;
  console.log(location.state.userProfiles)



  if (loading) return <div className=' w-[100vw] h-[100vh] bg-red-400 flex justify-center items-center'><HashLoader /></div>
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-black">
        <h1 className="text-6xl mb-6 text-center font-serif p-8">PROFILES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
