import React from 'react'


const Card = () => {




  return (
   <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <div key={pkg.id} className="bg-white p-6 rounded-lg shadow-md" onClick={() => navigate(`/package/${pkg.id}`)}>
            <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover mb-4"/>
            <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
