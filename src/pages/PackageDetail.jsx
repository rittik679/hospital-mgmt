import { useParams } from 'react-router-dom';
import { packages } from '../data/packages';

const PackageDetail = () => {
  const { id } = useParams();
  const selectedPackage = packages.find(pkg => pkg.id === parseInt(id));

  if (!selectedPackage) return <div>Package not found</div>;

  return (
    <div className="p-8  bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
      <img src={selectedPackage.image} alt={selectedPackage.name} className="w-full h-64 object-cover mb-4"/>
      <h1 className="text-2xl font-bold mb-2">{selectedPackage.name}</h1>
      <p>{selectedPackage.description}</p>
    </div>
  );
};

export default PackageDetail;
