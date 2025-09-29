import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import CategoryPage from './pages/CategoryPage';

const App = () => {
  const user = {role: "admin"}
  const userLogin = false
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={!userLogin ? <SignUpPage/> : <Navigate to="/" />} />
        <Route path='/login' element={!userLogin ? <LoginPage/> : <Navigate to="/" />} />
        <Route path="/secret-dashboard" element={user.role === "admin" ? <AdminPage/> : <Navigate to="/login" />} />
        <Route path='/category/:category' element={<CategoryPage/>}/>
      </Routes>
    </Router>
  );
}

export default App
