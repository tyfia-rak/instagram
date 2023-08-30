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
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { Button } from '@mui/material';


function InstaNav() {
    const navigate = useNavigate();
    const logout = useAuthStore(state => state.logout);

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className='instaNav'>
            <img className='instaNav_logo' src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' />
            <div className='btn'>
                <Link to='/HomePage' className='menu-item'>
                    <HomeIcon className='icon' />
                    Home
                </Link>
                <Link to='/HomePage' className='menu-item'>
                    <SearchIcon className='icon' />
                    Search
                </Link>
                <Link to='/HomePage' className='menu-item'>
                    <ExploreIcon className='icon' />
                    Explore
                </Link>
                <Link to='/HomePage' className='menu-item'>
                    <SlideshowIcon className='icon' />
                    Reels
                </Link>
                <Link to='/HomePage' className='menu-item'>
                    <ChatIcon className='icon' />
                    Messages
                </Link>
                <Link to='/HomePage' className='menu-item'>
                    <FavoriteBorderIcon className='icon' />
                    Notification
                </Link>
                <Link to='/HomePage' className='menu-item'>
                    <AddCircleOutlineIcon className='icon' />
                    Create
                </Link>
                <Link to='/ProfilPage' className='menu-item'>
                    <AccountCircleIcon className='icon' />
                    Profil
                </Link>
            </div>

            <div className='menu'>
                <Button type='submit' onClick={handleLogout}>
                    Se deconnecter
                </Button>
            </div>
        </div>
    )
}

export default InstaNav