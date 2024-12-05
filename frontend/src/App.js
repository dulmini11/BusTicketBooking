import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componets/Login';
import HomePage from './componets/HomePage';
import BusRegistration from './componets/BusRegistration';
import Booking from './componets/Booking';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>QuickRoute E01</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/BusRegistration" element={<BusRegistration />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </Router>  
      
      {/* <HomePage/> */}
      
    </div>
  );
}

export default App;

