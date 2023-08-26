import React, { useState } from 'react'
import "./Login.css"
import { FaFacebook } from 'react-icons/fa';

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
    </div>
  )
}

export default Login