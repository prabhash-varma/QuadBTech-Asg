
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';
import MovieTicket from './pages/MovieTicket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/summary" element={<Summary/>}/>
          <Route path="/bookticket" element={<MovieTicket/>}/>
          <Route path="*" element={<center><h1>Page Not Found</h1></center>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
