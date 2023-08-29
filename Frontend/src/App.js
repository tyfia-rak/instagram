import React, { useEffect } from 'react';
import Signup from './page/SignupPage/Signup.js';
import Login from './page/loginPage/Login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilPage from './page/profilPage/ProfilPage.js';
import HomePage from './page/homePage/HomePage.js';
import EditePage from './page/editePage/EditePage.js';
import { checkUser } from './store/auth.store.js';
import './App.css';

function App() {

  useEffect(() => {
    checkUser();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<Login /> } />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/profilpage' element={<ProfilPage/>}/>
          <Route path='/EditPage' element={<EditePage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;