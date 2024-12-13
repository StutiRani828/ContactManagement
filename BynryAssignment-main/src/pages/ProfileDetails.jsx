import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './profildetails.css'
import Navbar from '../components/Navbar/Navbar';

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = useSelector((state) =>
    state.profiles.profiles.find((profile) => profile.id === parseInt(id))
  );
  console.log(profile);

  if (!profile) return <p>Profile not found.</p>;

  return (
   <>
   <Navbar/>
   <div className="container mx-auto p-4 flex justify-center items-center bg-black h-[88vh]">
     <section className=' card w-[30%] p-20 flex flex-col justify-around'>
      <img src={profile.image} alt={profile.firstName} className="w-24 h-24 rounded-full mx-auto text-center text-white" />
     <h1 className="text-5xl mb-6 text-center">{profile.firstName.toUpperCase()}</h1>
      <p className="mt-4 text-center text-white">Address : {profile.company.address.address}</p>
      <p className="mt-4 text-center text-white">Designation : {profile.company.department}</p>
      <p className="mt-4 text-center text-white">Company name : {profile.company.name}</p>
      <p className="mt-4 text-center text-white">Role : {profile.company.title}</p>
     </section>
    </div>
   </>
  );
};

export default ProfileDetails;
