import React from 'react'
import { location } from '../data/location'
import { useNavigate } from 'react-router-dom'
import SliderComponent from '../components/SliderComponent';


const Home = () => {
  const navigate = useNavigate();

  return (
   <div className="p-8  bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">


<div className="absolute top-4 left-4 group">
        <button
          className="focus:outline-none rounded-full border-2 border-white p-2 transition-transform transform hover:scale-110"
          onClick={() => navigate('/notifications')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 22c2.209 0 4-1.791 4-4H8c0 2.209 1.791 4 4 4zm6-6c0-5.523-2.691-10-6-10S6 10.477 6 16h12z"
            />
          </svg>
        </button>
        <div className="absolute left-0 w-32 mt-2 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2">
            <p className="font-bold">Notifications</p>
            <p className="text-sm">New messages</p>
            <p className="text-sm">Updates available</p>
            <p className="text-sm">Alerts</p>
          </div>
        </div>
      </div>



<div className="absolute top-4 right-4 group">
        <button
          className="focus:outline-none rounded-full border-2 border-white p-2 transition-transform transform hover:scale-110"
          onClick={() => navigate('/profile')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14c4.418 0 8-2.686 8-6s-3.582-6-8-6-8 2.686-8 6 3.582 6 8 6zM12 14c-4.418 0-8 2.686-8 6v2h16v-2c0-3.314-3.582-6-8-6z"
            />
          </svg>
        </button>
        <div className="absolute right-0 w-32 mt-2 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2">
            <p className="font-bold">User Profile</p>
            <p className="text-sm">View Profile</p>
            <p className="text-sm">Settings</p>
            <p className="text-sm">Logout</p>
          </div>
        </div>
      </div>
    

    <SliderComponent/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {location.map(pkg => (
          <div key={pkg.id} className="bg-white p-6 rounded-lg shadow-md" onClick={() => navigate(`/options`)}>
            <img src={pkg.img} alt={pkg.name} className="w-full h-30 object-cover mb-4"/>
            <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
          </div>
        ))}
      </div>
    </div>

 

  )
}

export default Home
