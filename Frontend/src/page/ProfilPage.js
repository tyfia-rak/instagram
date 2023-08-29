import React from 'react'
import "./ProfilPage.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InstaNav from '../navigation/InstaNav';

function ProfilPage() {
    const user = {
        username: 'Insta',
        fullName: 'Instagram',
        bio: 'elle est trop belle',
        followers: 1000,
        following: 200,
        posts: 150,
    };

    return (
        <div className="profile">
            <InstaNav />
            <div className='blockProfil'>
                <div className="profile-header">
                    <img className="profile-avatar" src="D:\Media\Frontend\public\image2.png" alt="Profile Avatar" />
                    <div className='profil-header-AllAbout'>
                        <div className='profil-header-target'>
                            <h2 className="profile-username">{user.username}</h2>
                            <button className='buttonTarget'>
                                following
                            </button>
                            <button className='buttonTarget'>
                                Message
                            </button>
                            <button className='buttonAdd'>
                                <PersonAddIcon />
                            </button>
                        </div>
                        <div className='profil-header-About'>
                            <p className='About'>{user.posts} posts</p>
                            <p className='About'>{user.followers} followers</p>
                            <p className='About'>{user.following} following</p>
                        </div>
                        <p>{user.fullName}</p>
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