import { Route, Routes } from 'react-router-dom';
import Booking from './Booking';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div>
            <Nav />
            <Main />
            <Footer />
          </div>
        }
      />
            <Route
        path="/Reservations"
        element={<Booking />}
      />
    </Routes>
  );
}

export default App;
