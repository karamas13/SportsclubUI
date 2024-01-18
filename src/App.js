
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sport from './pages/Sport';
import Home from './pages/Home';
import Coach from './pages/Coach';
import Athlete from './pages/Athlete';

function App() {
  return (
    <div className="App">
     <Router>
     <div className="App">
      <Routes>
        <Route exact path="/" />
        <Route index element={ <Home /> } /> 
        <Route path="/pages/sport" element={<Sport />} />
        <Route path="/pages/coach" element={<Coach />} />
        <Route path="/pages/athlete" element={<Athlete/>} />
       </Routes> 
     </div>
    </Router>
    </div>
  );
}

export default App;
