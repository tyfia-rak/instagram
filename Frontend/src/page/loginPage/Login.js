import React, { useState } from 'react'
import "./Login.css"
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { instagramIconStyle } from '../../assets/image/insta';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';
import { AuthLogin } from '../../store/auth.store';

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async () => {
    const res = await AuthLogin(login);
    if (res) {
      navigate('/')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: res.data,
      })
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div
          aria-label="Instagram"
          role="img"
          style={instagramIconStyle}>

        </div>
        <div className="identifiants">
          <TextField
            required
            type="email" value={login.email} placeholder="Email"
            onChange={(e) => setLogin(prev => ({ ...prev, email: e.target.value }))}
            size='small'
            id="email"
            label="Email"
          />
          <TextField
            required
            type="password" value={login.password} placeholder="Mot de passe"
            onChange={(e) => setLogin(prev => ({ ...prev, password: e.target.value }))}
            id="password"
            size='small'
            label="Mot de passe"
          />
        </div>

        <button className='login' type='submit' onClick={handleSubmit}>
          Log in
        </button>

        <div className='or'>
          <hr />OR<hr />
        </div>

        <button className='facebookLogIn'>
          <FaFacebook size="20" color='#094074' />
          <span>Log in with Facebook</span>
        </button>

        <a href="#" onClick={() => { }}>
          Forgot password?
        </a>
      </div>

      <div>
        <p>Don't have an account?<Link className='log' to='/Signup'>Sign up</Link></p>
      </div>

      <div className='footer'>
        <p>Get the App.</p>
        <div className='images'>
          <a href='https://www.apple.com/fr/app-store/'>
            <img alt="Download on the App Store" class="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"></img>
          </a>

          <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DC868C9B1-D397-4E2D-9360-0C451F213529%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge'>
            <img alt="Get it on Google Play" class="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login