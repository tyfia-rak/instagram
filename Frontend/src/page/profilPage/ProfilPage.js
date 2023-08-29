import React from 'react'
import "./ProfilPage.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InstaNav from '../../navigation/InstaNav';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';
import IconProfile from '../../assets/image/iconeProfil.png'


function ProfilPage() {
    const navigate = useNavigate();
    const handleEdite = () => {
        navigate("/EditPage")
    }

    const auth = useAuthStore(state => state.auth);
    console.log(auth)
    return (
        <div className="profile">
            <InstaNav />
            <div className='blockprofile'>
                <div className="profile-header">
                    <img className="profile-avatar" src={IconProfile} alt="Profile Avatar" />
                    <div className='profil-header-AllAbout'>
                        <div className='profil-header-target'>
                            <h2 className="profile-username">{auth?.username}</h2>
                            <button className='buttonTarget' onClick={handleEdite}>
                                Modifier profil
                            </button>
                            <button className='buttonTarget'>
                                Voir Archive
                            </button>
                            <button className='buttonAdd'>
                                <PersonAddIcon />
                            </button>
                        </div>
                        <div className='profil-header-About'>
                            <p className='About'>{auth?.posts} posts</p>
                            <p className='About'>{auth?.followers} followers</p>
                            <p className='About'>{auth?.following} following</p>
                        </div>
                    </div>
                </div>
                <hr className='hr'></hr>
                <div className='Profil-TypePosts'>
                    <button className='buttonChoisePoste'>
                        Publication
                    </button>
                    <button className='buttonChoisePoste'>
                        Enregistrement
                    </button>
                    <button className='buttonChoisePoste'>
                        Identiter
                    </button>
                </div>
                <div className="profile-posts">
                    <div className="post">
                        <img src="/D:\Media\Frontend\public\image2.png" alt="Post" className="post-image" />
                    </div>
                    <div className="post">
                        <img src="D:\Media\Frontend\public\image2.png" alt="Post" className="post-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilPage