import React from 'react'
import "./InstaNav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


function InstaNav() {
  return (
    <div className='instaNav'>
        <img className='instaNav_logo' src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' /> 
        <div className='btn'>
            <Link to = '/HomePage'>
                <button>
                    <HomeIcon className='icon'/>
                    Home 
                </button>
            </Link>
            <button>
                <SearchIcon className='icon'/>
                Search
            </button>
            <button>
                <ExploreIcon className='icon'/>
                Explore
            </button>
            <button>
                <SlideshowIcon className='icon'/>
                Reels
            </button>
            <button>
                <ChatIcon className='icon'/>
                Messages
            </button>
            <button>
                <FavoriteBorderIcon className='icon'/>
                Notification
            </button>
            <button>
                <AddCircleOutlineIcon className='icon'/>
                Create
            </button>
            <Link to='/ProfilPage'>
                <button>
                    <AccountCircleIcon className='icon'/>
                    Profil
                </button>
            </Link>
        </div>

        <div className='menu'>
            <MenuIcon className='icon'/>
            More
        </div>
    </div>
  )
}

export default InstaNav