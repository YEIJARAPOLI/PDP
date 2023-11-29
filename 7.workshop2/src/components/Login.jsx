/* eslint-disable no-unused-vars */
import { Box, Button, Container, CssBaseline, Grid, Paper, TextField, Typography } from "@mui/material"
import { useContext } from "react"
import { ParkingContext } from "../context/ParkingProvider"

const Login = () => {

    const { auth, validateUser } = useContext(ParkingContext)
    const { login, setLogin } = useContext(ParkingContext)

    const handlerUserName = (e) => {
        setLogin({ ...login, userName: e.target.value })
    }

    const handlerPassword = (e) => {
        setLogin({ ...login, password: e.target.value })
    }

    return (
        <Container component="main" maxWidth="lg">
            <Box sx={{ marginTop: 20 }}>
                <Grid container>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} sx={{ backgroundImage: "url(https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-mobile/f_auto/mls-nsh-prd/obwnoetcmyknifgvvsnf.jpg)", backgroundRepeat: "no-repeat", backgroundColor: (t) => t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900], backgroundSize: "cover", backgroundPosition: "center" }} />

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>

                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField margin="normal" required fullWidth id="user" label="Usuario" name="user" autoFocus value={login.userName} onChange={handlerUserName} focused />
                                <TextField margin="normal" required fullWidth name="password" label="Clave" type="password" id="password" autoComplete="password" value={login.password} onChange={handlerPassword} />

                                <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={validateUser}>
                                    Sign In
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Login