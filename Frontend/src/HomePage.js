import React from 'react'
import "./HomePage.css"
import InstaNav from './navigation/InstaNav'
// import Login from './loginPage/Login'
import EditePage from './page/EditePage'


function HomePage() {
  return (
    // <Login/>
    <div className='homePage'>
        <div className='homePage_nav'>
            <InstaNav />
        </div>
        <div className='homePage_page'>
            <EditePage/>
        </div>
    </div>
  )
}

export default HomePage