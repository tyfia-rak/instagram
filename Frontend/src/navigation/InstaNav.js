import React from 'react'
import "./InstaNav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';

function InstaNav() {
  return (
    <div className='instaNav'>
        <img className='instaNav_logo' src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' />
        <div className='instaNav_buttons'>
            <button className='instaNav_button'>
                <HomeIcon className='icone'/>
                <span>Home</span>
            </button>
            <button className='instaNav_button'>
                <SearchIcon className='icone'/>
                <span>Search</span>
            </button>
            <button className='instaNav_button'>
                <ExploreIcon className='icone'/>
                <span>Explore</span>
            </button>
            <button className='instaNav_button'>
                <SlideshowIcon className='icone'/>
                <span>Vidéo</span>
            </button>
            <button className='instaNav_button'>
                <ChatIcon className='icone'/>
                <span>Message</span>
            </button>
            <button className='instaNav_button'>
                <FavoriteBorderIcon className='icone'/>
                <span>Favorite</span>
            </button>
            <button className='instaNav_button'>
                <AddCircleOutlineIcon className='icone'/>
                <span>Story</span>
            </button>
        </div>
        <div className='instaNav_more'>
            <button className='instaNav_button'>
                    <MenuIcon className='icone'/>
                    <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default InstaNav