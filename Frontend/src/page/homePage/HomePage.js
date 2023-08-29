import React from 'react'
import "./HomePage.css"
import InstaNav from '../../navigation/InstaNav'
import { Grid, Stack, Avatar } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuthStore } from '../../store/auth.store';
import CardProfile from '../../components/CardProfile';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import Andry from '../../assets/image/Andry.jpg'

function HomePage() {
  const auth = useAuthStore(state => state.auth);
  return (
    <div className='homePage'>
      <InstaNav />
      <div className='w-80 bloc_home'>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Stack className='nav_home' paddingLeft={10}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </Stack>
            <Stack alignItems={"start"} justifyContent={"center"} paddingLeft={20}>
              <Stack direction={'row'} paddingTop={5} spacing={2} alignItems={"center"}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <p>
                  cindyBak1
                </p>
                <p>
                  .12mn
                </p>
              </Stack>
              <Stack width={400} paddingBottom={2} paddingTop={2}>
                <img src={Andry} />
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={2} paddingBottom={2}>
                <FavoriteBorderIcon />
                <ChatBubbleOutlineIcon />
                <SendIcon />
              </Stack>
              <p>
                Aimer par: Mpianatra Ankatso
              </p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={4}>
            <CardProfile user={auth} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage