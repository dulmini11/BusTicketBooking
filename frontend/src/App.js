import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componets/Login';
import HomePage from './componets/HomePage';
import BusRegistration from './componets/BusRegistration';
import Booking from './componets/Booking';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/BusRegistration" element={<BusRegistration />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>  
      
      {/* <HomePage/> */}
      </header>
    </div>
  );
}

export default App;

