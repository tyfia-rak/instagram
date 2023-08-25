import React from 'react';
import './Signup.css';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Signup(){
    const instagramIconStyle = {
        backgroundImage: "url('https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png')",
        backgroundPosition: '0px 0px',
        backgroundSize: '170px 180px',
        width: '170px',
        height: '60px',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block'
      };

      return(
        <><header className="App-header">
            <div
                aria-label="Instagram"
                role="img"
                style={instagramIconStyle}
            ></div>

            <div className='head'>
                Sign up to see photos and videos from your friends.
            </div>

            <button className='facebookLogIn2'>
                <FaFacebook size="20" color='#fff' />
                <span>Log in with Facebook</span>
            </button>

            <div className='or'>
                <hr />OR<hr />
            </div>

            <div className="identifiants">
                <input type="email" placeholder="Mobile Number or Email" />
                <input type='password' placeholder='Full Name' />
                <input type='password' placeholder='Username' />
                <input type='password' placeholder='Password' />
            </div>
            <div className='paragraph'>
                <p>People who use our service may have uploaded your contact information to Instagram. <a>Learn More</a></p>
                <p>By signing up, you agree to our <a>Terms , Privacy Policy</a> and <a>Cookies Policy.</a></p>
            </div>

            <button className='signup' onClick={() => { } }>
                Sign up
            </button>
        </header>
        
        <footer>
            <div className='login'>
                <p>Already have an account?<Link className='log' to='/Login'>Log in</Link></p>
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
        </div></>
      );
}
export default Signup;

