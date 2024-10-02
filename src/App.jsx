import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Options from './pages/Options';
import PackageGrid from './pages/PackageGrid';
import PackageDetail from './pages/PackageDetail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<Options />} />
        <Route path="/packages" element={<PackageGrid />} />
        <Route path="/packages/:packageType" element={<PackageGrid />} />
        <Route path="/package/:id" element={<PackageDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
