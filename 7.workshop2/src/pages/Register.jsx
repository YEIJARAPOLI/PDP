import { Container, Box, Grid } from "@mui/material"
import Navbar from "./Navbar"
import FormUsers from "../components/FormUsers"
import Clients from "./Clients"

const Register = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Navbar />

                <Box>
                    <Grid container>
                        <Grid item sm={4}>
                            <FormUsers />
                        </Grid>
                        <Grid item sm={8}>
                            <Clients />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Register