import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import Footer from './components/Footer';
// import LoginHeader from './components/LoginHeader';
// import Header from './components/Header';
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
