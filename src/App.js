import './App.css';
import  Header  from './Header';
import HomePage from './homePage';
import ReservationPage from './ReservationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/ReservationPage' element={<ReservationPage/>} />
      </Routes>
    </Router>
  );
}

export default App;