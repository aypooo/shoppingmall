
import './App.css';
import LandingPage from './component/views/LandingPage/LandingPage';
import LoginPage from './component/views/LoginPage/LoginPage';
import RegisterPage from './component/views/RegisterPage/RegisterPage';
import UploadProductPage from './component/views/UploadProductPage/UploadProductPage';
import NavBar from './component/views/NavBar/NavBar'
import Footer from './component/views/Footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/product/upload" element={<UploadProductPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Suspense>
  );
}


export default App;