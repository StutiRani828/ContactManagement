import { Link } from 'react-router-dom';
import { useState } from 'react';
import MapComponent from './MapComponent';

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={profile.image} alt={profile.firstName} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl text-center mt-2 text-white">{profile.firstName} {profile.lastName}</h2>
      <p className="text-center text-white">{profile.company.department}</p>
      <div className="flex justify-between mt-4">
        <Link to={`/profile/${profile.id}`} className="text-blue-500">Details</Link>
        <button
          className="text-blue-500"
          onClick={() => setShowMap(!showMap)}
        >
          Summary
        </button>
      </div>
      {showMap && <MapComponent address={profile.address.coordinates} />}
    </div>
  );
};

export default ProfileCard;
