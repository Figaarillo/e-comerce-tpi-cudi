import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import AuthStatus from './components/AuthStatus';
import Dashboard from './components/Dashboard';
import CartButton from './components/CartButton';
import NavbarBase from './components/NavbarBase';

const App = () => {
  const userLogin = false
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={!userLogin ? <SignUpPage/> : <Navigate to="/" />} />
        <Route path='/login' element={!userLogin ? <LoginPage/> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App