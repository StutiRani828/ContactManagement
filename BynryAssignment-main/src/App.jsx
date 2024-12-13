import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel'
import ProfileDetails from './pages/ProfileDetails';

function App() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD4FfxmmEYxsMWzBy87X63Skow01QRH_QU">
      <Router>
        <Routes>
          <Route path="/" element={<AdminPanel/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Routes>
      </Router>
    </LoadScript>

  );
}

export default App;
