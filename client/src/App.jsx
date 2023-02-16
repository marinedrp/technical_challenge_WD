import './App.css';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PhoneDetailsPage from './pages/PhoneDetailsPage/PhoneDetailsPage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route  path="/:phoneId" element={<PhoneDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
