import React from 'react';
import Signup from './SignupPage/Signup';
import Login from './loginPage/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<Login /> } />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;