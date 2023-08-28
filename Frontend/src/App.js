import React from 'react';
import Signup from './SignupPage/Signup';
import Login from './loginPage/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilPage from './page/ProfilPage';
// import EditPage from './page/EditePage'
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<HomePage /> } />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/profilpage' element={<ProfilPage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;