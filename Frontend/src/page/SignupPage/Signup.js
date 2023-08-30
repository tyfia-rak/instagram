import React, { useState } from 'react';
import './Signup.css';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import { handleRegister } from '../../helpers/auth.helper';
import Swal from 'sweetalert2';
import { instagramIconStyle } from '../../assets/image/insta';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async () => {
        const res = await handleRegister(user);
        if (res.success) {
            Swal.fire({
                icon: 'success',
                title: 'Utilisateur enregistré avec succès.',
            })
            navigate('/login')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data,
            })
        }
    }

    return (
        <>
            <div className="App-header">
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

                <Stack className="identifiants" padding={2}>
                    <TextField
                        required
                        type="email" value={user.email} placeholder="Email"
                        onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                        size='small'
                        id="email"
                        label="Email"
                    />
                    <TextField
                        required
                        type="text" value={user.username} placeholder="Nom d'utilisateur"
                        onChange={(e) => setUser(prev => ({ ...prev, username: e.target.value }))}
                        size='small'
                        id="username"
                        label="Nom d'utilisateur"
                    />
                    <TextField
                        required
                        type="password" value={user.password} placeholder="Mot de passe"
                        onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))}
                        id="password"
                        size='small'
                        label="Mot de passe"
                    />
                    <TextField
                        required
                        type="password" value={user.confirmPassword} placeholder="Confirmer votre Mot de passe"
                        onChange={(e) => setUser(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        id="password"
                        size='small'
                        label="Confirmer votre Mot de passe"
                    />
                </Stack>
                <div className='paragraph'>
                    <p>People who use our service may have uploaded your contact information to Instagram. <a>Learn More</a></p>
                    <p>By signing up, you agree to our <a>Terms , Privacy Policy</a> and <a>Cookies Policy.</a></p>
                </div>

                <button className='signup' type='submit' onClick={() => handleSubmit()}>
                    Sign up
                </button>
            </div>
            <div>
                <p>Already have an account?<Link to='/Login'>Log in</Link></p>
            </div>
        </>
    );
}
export default Signup;

