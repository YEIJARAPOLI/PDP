import { Container, Box, Grid } from "@mui/material"
import { useContext } from "react"
import { ParkingContext } from "../context/ParkingProvider"
import CellItem from "./CellItem"

const Cells = () => {

    const { cells } = useContext(ParkingContext)

    return (
        <>
            <Container sx={{ marginTop: 6 }}>
                <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={3}>
                            {cells.map((cell) => (
                                <CellItem key={cell.id} cell={cell} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Cells