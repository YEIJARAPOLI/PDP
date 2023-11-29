import { Box, Typography, Button, TextField } from "@mui/material"
import { useContext } from "react"
import { ParkingContext } from "../context/ParkingProvider"

const FormParking = () => {

    const { cell, setCell, handleClient } = useContext(ParkingContext)

    const handlePlate = (e) => {
        setCell({ ...cell, info: { plate: e.target.value.toUpperCase() } })
    }

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 6 }}>
                <Typography component="h1" variant="h5">
                    Ingreso / Salida
                </Typography>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth id="plate" label="Placa" name="plate" autoFocus value={cell.info.plate} onChange={handlePlate} />

                    <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleClient}>
                        Ingresar / Salir
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default FormParking