import React from 'react'
import "./HomePage.css"
import InstaNav from './navigation/InstaNav'
// import Login from './loginPage/Login'
// import EditePage from './page/EditePage'


function HomePage() {
  return (
    <div className='home_body'>
      <InstaNav/>        
      <div className='stories'>
        <div className='profil_1'>
        </div>
      </div>
    </div>
  )
}

export default HomePage