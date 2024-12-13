import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addProfile, updateProfile, deleteProfile } from '../features/profilesSlice';
import Navbar from '../components/Navbar/Navbar';
import { fetchProfiles } from '../features/profilesSlice';
import { useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';


const AdminPanel = () => {

  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profiles);
  const [fetchig, setFetching] = useState(true);
  // console.log(profiles);
  const location = useLocation();
  // console.log(location.state);


  useEffect(() => {

    console.log(' in fetching')
    dispatch(fetchProfiles());
    setTimeout(()=>{

      setFetching(false);
    },2000)

  }, [dispatch]);

  const [formState, setFormState] = useState({
    id: '',
    name: '',
    photo: '',
    description: '',
    address: {
      coordinates: {
        lat: '',
        lng: '',
      }
    },
  });

  console.log(formState)

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleAddProfile = () => {
    dispatch(addProfile({ ...formState, id: Date.now().toString() }));
    setFormState({ id: '', name: '', photo: '', address: { lat: 0, lng: 0 } });
  };

  const handleUpdateProfile = () => {
    dispatch(updateProfile(formState));
    setFormState({ id: '', name: '', photo: '', address: { lat: 0, lng: 0 } });
  };

  const handleDeleteProfile = (id) => {
    dispatch(deleteProfile(id));
  };

  return (
    <>
      <Navbar />


      {fetchig && (<div className=' w-[100vw] h-[100vh] bg-red-400 flex justify-center items-center'><HashLoader /></div>
      )}

      {
        location.state ? (

          <div className="container mx-auto p-4 bg-black ">
            <h1 className="text-7xl font-bold mb-4 p-8 text-center">Admin Panel</h1>
            <div className="mb-4 border border-solid border-white-400 flex justify-around items-center flex-col gap-7 p-10">
              <section className=' w-[80%] flex justify-around items-center '>
                <div className=''>
                  <div>
                    <label htmlFor="name" className=' text-white'>NAME : </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      className=" w-[230px] p-2 border border-gray-300 rounded mb-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className=' text-white'>Photo Url : </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      value={formState.image}
                      onChange={handleInputChange}
                      className=" w-[210px] p-2 rounded mb-2"
                    />
                  </div>
                </div>
                <div className=' '>
                  <div>
                    <label htmlFor="lat" className=' text-white'>Latitude : </label>
                    <input
                      type="number"
                      name="lat"
                      placeholder="Latitude"
                      onChange={handleInputChange}
                      value={formState.address.coordinates.lat}
                      // onChange={(e) => setFormState({ ...formState, address: { ...formState.address, lat: +e.target.value } })}
                      className="p-2 border border-gray-300 rounded mb-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="lat" className=' text-white'>Longitude : </label>
                    <input
                      type="number"
                      name="lng"
                      placeholder="Longitude"
                      onChange={handleInputChange}

                      value={formState.address.coordinates.lng}
                      // onChange={(e) => setFormState({ ...formState, address: { ...formState.address, lng: +e.target.value } })}
                      className="p-2  rounded mb-2"
                    />
                  </div>
                </div>
              </section>
              <div>
                {formState.id ? (
                  <button onClick={() => { alert('Updated Successfully') }} className="bg-blue-500 text-white p-2 rounded">Update Profile</button>
                ) : (
                  <button onClick={handleAddProfile} className="bg-green-500 text-white p-2 rounded">Add Profile</button>
                )}
              </div>
            </div>
            <div>
              {location.state.userProfiles.map(profile => (
                <div key={profile.id} className="border p-4 rounded mb-4">
                  <p className=' text-white'><strong>{profile.firstName}</strong></p>
                  <p className=' text-white'>{profile.age}</p>
                  <p className=' text-white'>{profile.birthDate}</p>
                  <button onClick={() => setFormState(profile)} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
                  <button onClick={() => handleDeleteProfile(profile.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                </div>
              ))}
            </div>
          </div>

        ) :

          <div className="container mx-auto p-4 bg-black ">
            <h1 className="text-7xl font-bold mb-4 p-8 text-center">Admin Panel</h1>
            <div className="mb-4 border border-solid border-white-400 flex justify-around items-center flex-col gap-7 p-10">
              <section className=' w-[80%] flex justify-around items-center '>
                <div className=''>
                  <div>
                    <label htmlFor="name" className=' text-white'>NAME : </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      className=" w-[230px] p-2 border border-gray-300 rounded mb-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className=' text-white'>Photo Url : </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      value={formState.image}
                      onChange={handleInputChange}
                      className=" w-[210px] p-2 rounded mb-2"
                    />
                  </div>
                </div>
                <div className=' '>
                  <div>
                    <label htmlFor="lat" className=' text-white'>Latitude : </label>
                    <input
                      type="number"
                      name="lat"
                      placeholder="Latitude"
                      onChange={handleInputChange}
                      value={formState.address.coordinates.lat}
                      // onChange={(e) => setFormState({ ...formState, address: { ...formState.address, lat: +e.target.value } })}
                      className="p-2 border border-gray-300 rounded mb-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="lat" className=' text-white'>Longitude : </label>
                    <input
                      type="number"
                      name="lng"
                      placeholder="Longitude"
                      onChange={handleInputChange}

                      value={formState.address.coordinates.lng}
                      // onChange={(e) => setFormState({ ...formState, address: { ...formState.address, lng: +e.target.value } })}
                      className="p-2  rounded mb-2"
                    />
                  </div>
                </div>
              </section>
              <div>
                {formState.id ? (
                  <button onClick={() => { alert('Updated Successfully') }} className="bg-blue-500 text-white p-2 rounded">Update Profile</button>
                ) : (
                  <button onClick={handleAddProfile} className="bg-green-500 text-white p-2 rounded">Add Profile</button>
                )}
              </div>
            </div>
            <div>
              {profiles.map(profile => (
                <div key={profile.id} className="border p-4 rounded mb-4">
                  <p className=' text-white'><strong>{profile.firstName}</strong></p>
                  <p className=' text-white'>{profile.age}</p>
                  <p className=' text-white'>{profile.birthDate}</p>
                  <button onClick={() => setFormState(profile)} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
                  <button onClick={() => handleDeleteProfile(profile.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                </div>
              ))}
            </div>
          </div>
      }





    </>

  );
};

export default AdminPanel;
