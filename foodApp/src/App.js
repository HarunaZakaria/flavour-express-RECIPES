import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import HomePage from './Pages/HomePage';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage />} />
          <Route path = "/Home" element = {<HomePage />} />
          <Route path = "/Reservation" element = {<Reservation />} />
        </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
