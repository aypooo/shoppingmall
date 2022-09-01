
import './App.css';
import LandingPage from './component/views/LandingPage/LandingPage';
import LoginPage from './component/views/LoginPage/LoginPage';
import RegisterPage from './component/views/RegisterPage/RegisterPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/registerpage" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;