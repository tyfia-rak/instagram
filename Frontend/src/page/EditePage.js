import React from 'react'
import "./EditePage.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GppGoodIcon from '@mui/icons-material/GppGood';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Avatar } from '@mui/material';
import { TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
                    <hr/>
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
                    <h1 className='title_edit'>Modifier profil</h1>
                    <div className='Edite_page_Avatar'>
                        <div className='Edite_page_description'>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                            />
                        </div>
                        <div className='Edite_box_text'>
                            <p> Tyfia rakoto </p>
                            <p> Modifier profil </p>
                        </div>
                    </div>
                    <div className='Edite_page_web'>
                        <div className='Edite_page_description'>
                            <p>Site web</p>
                        </div>
                        <div className='Edite_box_text'>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <p>
                                La modification des liens est disponible uniquement sur mobile.
                                Rendez-vous sur l’application Instagram et modifiez votre profil
                                pour changer les sites web dans votre bio.
                            </p>
                        </div>
                    </div>
                    <div className='Edite_page_bio'>
                        <div className='Edite_page_description'>
                            <p>Site web</p>
                        </div>
                        <div className='Edite_box_text'>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <p>0/150</p>
                        </div>
                    </div>
                    <div className='Edite_page_genre'>
                        <div className='Edite_page_description'>
                            <p>Site web</p>
                        </div>
                        <div className='Edite_box_text'>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" className='field_text'/>
                            <p>Ceci ne sera pas affiché sur votre profil public.</p>
                        </div>
                    </div>
                    <div className='Edite_page_checkBox'>
                        <div className='Edite_checkBox_description'>
                            <p>Afficher les suggestions de compte sur les profils</p>
                        </div>
                        <div className='Edite_Checkbox'>
                            <Checkbox {...label} />
                            <p>
                                Choisissez si les personnes peuvent voir des suggestions de comptes
                                similaires sur votre profil et si votre compte peut être suggéré sur d’autres profils.
                            </p>
                        </div>
                    </div>
                    <div className='Edite_submit_button'>
                        <Button variant="contained">Contained</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditePage