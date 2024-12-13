// import React from 'react';
// import './navbar.css';
// import { useNavigate } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';

// const Navbar = () => {
//     const product = useSelector(state => state.products)
//     const dispatch = useDispatch();
//     const nav = useNavigate();


//     return (
//         <nav className=''>
//             <div className='h-[10vh] md:w-[95vw] lg:w-[95vw] mx-[1vw] mt-3 flex justify-between items-center border border-solid border-black rounded-2xl'>
//                 <div className='w-[25%] flex justify-center items-center gap-20'>
//                     <h1 className='text-xl tracking-wider'>@NexGenGlam</h1>
//                 </div>

//                 <div id='menu' className='w-[33%] flex justify-evenly items-center'>
//                     <h1 onClick={() => nav('/')}>Home</h1>
//                     <h1 onClick={() => nav('/admin-panel')}>Admin Panel</h1>
//                 </div>

//                 <div className='w-[30%]'>
//                     <input
//                         type="text"
//                         placeholder='Search products here'
//                         className='bg-black text-gray-300 border border-solid border-white rounded-2xl'
//                     />
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const product = useSelector(state => state.products);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { profiles } = useSelector(state => state.profiles)
    console.log(profiles)
    

    return (
        <nav className=' flex justify-center items-center bg-black'>
            <div className='h-[10vh] md:w-[95vw] lg:w-[95vw] mx-auto mt-3 mb-3 flex justify-between items-center border border-solid border-white rounded-2xl p-2'>
                {/* Brand Section */}
                <div className='w-[50%] md:w-[25%] flex justify-center items-center gap-4 md:gap-20'>
                    <h1 className='text-lg md:text-xl tracking-wider'>@BYNRY</h1>
                </div>

                {/* Menu Section */}
                <div id='menu' className='hidden md:flex md:w-[33%] justify-evenly items-center'>
                    <h1 className='cursor-pointer' onClick={() => nav('/', { state: { userProfiles: profiles } })}>Admin Panel</h1>
                    <h1 className='cursor-pointer' onClick={() => nav('/home', {
                        state: { userProfiles: profiles }
                    })}>Profiles</h1>
                </div>

                {/* Search Section */}
                <div className='w-[50%] md:w-[30%] flex justify-center items-center'>
                    <input
                        type="text"
                        placeholder='Search profiles here'
                        className='w-[60%] pl-5 bg-black text-gray-300 border border-solid border-white rounded-2xl'
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
