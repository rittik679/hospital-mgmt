import React from 'react';
import { useParams } from 'react-router-dom';
import { packages } from '../data/packages';

const PackageGrid = () => {
  const { packageType } = useParams();

  // Filter packages based on the selected type (pediatric or birthing)
  const filteredPackages = packages.filter(pkg => pkg.category === packageType);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 capitalize">{packageType} Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover mb-4"/>
            <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
            <p className="text-gray-600">{pkg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageGrid;
