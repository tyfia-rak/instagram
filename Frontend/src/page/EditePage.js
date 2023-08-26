import React from 'react'
import "./EditePage.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GppGoodIcon from '@mui/icons-material/GppGood';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function EditePage() {
    return (
        <div className='block_page'>
            <div className='Edite_profil_bloc'>
                <div className='Edite_profil_nav'>
                    <div className='Edite_profil_nav_text'>
                        <img className='Edit_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png' />
                        <p>
                            Espace Comptes
                        </p>
                        <p>
                            Gérez vos expériences partagées et vos paramètres de comptes sur l’ensemble des technologies Meta.
                        </p>
                        <div className='Edite_text_logo'>
                            <PersonOutlineIcon />
                            <p>
                                Informations personnelles
                            </p>
                        </div>
                        <div className='Edite_text_logo'>
                            <GppGoodIcon />
                            <p>
                                Mot de passe et sécurité
                            </p>
                        </div >
                        <div className='Edite_text_logo'>
                            <NewspaperIcon />
                            <p>
                                Préférences publicitaires
                            </p>
                        </div>
                    </div>

                    <div className='Edite_profil_nav_cherche'>
                        <p>Modifier le profil</p>
                        <p>Applications et sites Web</p>
                        <p>Notification par e-mail</p>
                        <p>Notification push</p>
                        <p>Ce que vous voyer</p>
                        <p>Qui peut voir votre contenue</p>
                        <p>Moyen d'interagir avec vous</p>
                        <p>Supervision</p>
                        <p>Aide</p>
                        <p>Passer à un compte profesionnel</p>
                    </div>
                </div>
                <div className='Edite_profil_body'>
                    
                </div>
            </div>
        </div>
    )
}

export default EditePage