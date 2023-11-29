import { Container, Box, Grid } from "@mui/material"
import FormParking from "./FormParking"
import Navbar from "../pages/Navbar"
import Cells from "../pages/Cells"

const Parking = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Navbar />

                <Box>
                    <Grid container>
                        <Grid item sm={4}>
                            <FormParking />
                        </Grid>

                        <Grid item sm={8}>
                            <Cells />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Parking