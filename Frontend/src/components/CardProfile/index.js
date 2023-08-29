import { Avatar, Stack } from "@mui/material"
import { Link } from "react-router-dom";

const CardProfile = ({ user }) => {
    return (
        <Stack direction="row" spacing={2} className='nav_Profil'>
            <Stack direction='row' spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                <Stack direction={'column'} textAlign={'start'} alignItems={'center'} justifyContent={'center'}>
                    <h4>{user?.username}</h4>
                </Stack>
            </Stack>
            <Stack alignItems={"end"} justifyContent={"center"} paddingLeft={5}>
                <Link to='/HomePage' >
                    Basculer
                </Link>
            </Stack>
        </Stack>
    )
}

export default CardProfile;