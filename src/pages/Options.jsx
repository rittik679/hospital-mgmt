import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Options = () => {
  // State to track the currently opened dropdown
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const navigate = useNavigate();

  // Toggle dropdown visibility for the selected card
  const handleCardClick = (id) => {
    // Toggle the dropdown for the specific card
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Handle routing to the PackageGrid page with the selected package type
  const handlePackageSelection = (packageType) => {
    navigate(`/packages/${packageType}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
      <div className="grid grid-cols-2 gap-4">

        {/* Card 1: Packages */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 ${openDropdownId === 1 ? 'h-auto' : 'h-24'}`}
          onClick={() => handleCardClick(1)}
        >
          <h2 className="text-xl font-bold mb-2">Packages</h2>
          {openDropdownId === 1 && (
            <div className="mt-2 bg-gray-50 p-4 border border-blue-500 border-4 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('pediatric')}
                >
                  Pediatric
                </li>
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('birthing')}
                >
                  Birthing
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Card 2: Unit Transfer */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 ${openDropdownId === 2 ? 'h-auto' : 'h-24'}`}
          onClick={() => handleCardClick(2)}
        >
          <h2 className="text-xl font-bold mb-2">Unit Transfer No.</h2>
          {openDropdownId === 2 && (
            <div className="mt-2 bg-gray-50 p-4 border border-blue-500 border-4 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('ambulance')}
                >
                  Ambulance
                </li>
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('unit')}
                >
                  Unit
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Card 3: Service Availability */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 ${openDropdownId === 3 ? 'h-auto' : 'h-24'}`}
          onClick={() => handleCardClick(3)}
        >
          <h2 className="text-xl font-bold mb-2">Service Availability</h2>
          {openDropdownId === 3 && (
            <div className="mt-2 bg-gray-50 p-4 border border-blue-500 border-4 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('availability')}
                >
                  Availability
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Card 4: Charges */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 ${openDropdownId === 4 ? 'h-auto' : 'h-24'}`}
          onClick={() => handleCardClick(4)}
        >
          <h2 className="text-xl font-bold mb-2">Charges</h2>
          {openDropdownId === 4 && (
            <div className="mt-2 bg-gray-50 p-4 border border-blue-500 border-4 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('scan')}
                >
                  Scan Charges
                </li>
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('lab')}
                >
                  Lab Test Charges
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Card 5: Special Updates */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 ${openDropdownId === 5 ? 'h-auto' : 'h-24'}`}
          onClick={() => handleCardClick(5)}
        >
          <h2 className="text-xl font-bold mb-2">Special Updates</h2>
          {openDropdownId === 5 && (
            <div className="mt-2 bg-gray-50 p-4 border border-blue-500 border-4 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('pediatric')}
                >
                  Pediatric
                </li>
                <li
                  className="text-lg font-medium cursor-pointer hover:text-purple-500"
                  onClick={() => handlePackageSelection('birthing')}
                >
                  Birthing
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Options;
