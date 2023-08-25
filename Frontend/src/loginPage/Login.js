import React, { useState } from 'react'
import "./Login.css"
import { FaFacebook } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Login() {
    const [Pass,setPass] = useState("bidy");

    const [Email,setEmail] = useState("bidy");

    const instagramIconStyle = {
        backgroundImage: "url('https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png')",
        backgroundPosition: '0px 0px',
        backgroundSize: '240px 270px',
        width: '250px',
        height: '75px',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block'
      };

  return (
    <div className="App">
        <header className="App-header">
            <div aria-label="Instagram" role="img" style={instagramIconStyle}></div>
            <div className="identifiants">
                <input type="email" placeholder="Phone number, username, or email" value={Email} onChange={e=> setEmail(e.target.value)}/>
                <input type='password' placeholder='Password'value={Pass}/>
            </div>

            <button className='login' onClick={() => {}}>
            Log in
            </button> 

            <div className='or'>
                <hr/>OR<hr/>
            </div>

            <button className='facebookLogIn'>
                <FaFacebook size="30" color='#094074'/>
                <span>Log in with Facebook</span>
            </button>

            <a href="#" onClick={() => {}}>
                Forgot password?
            </a>         
        </header>

        <footer>
            <div className='login'>
                <p>Don't have an account?<Link className='log' to='/Signup'>Sign up</Link></p>
            </div>
        </footer>
            
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