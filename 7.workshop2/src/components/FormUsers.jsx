import { Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ParkingContext } from "../context/ParkingProvider"
import { brandData } from "../data/brandData"

const FormUsers = () => {

    const { client, setClient, saveClient } = useContext(ParkingContext)
    const [brands, setBrans] = useState([])

    const handleType = (e) => {
        setClient({ ...client, vehicle: e.target.value })
    }
    const handleDocument = (e) => {
        setClient({ ...client, document: e.target.value })
    }
    const handlePlate = (e) => {
        setClient({ ...client, plate: e.target.value })
    }
    const handleBrand = (e) => {
        setClient({ ...client, brand: e.target.value })
    }
    const handleModel = (e) => {
        setClient({ ...client, model: e.target.value })
    }
    const handleCylinder = (e) => {
        setClient({ ...client, cylinder: e.target.value })
    }

    useEffect(() => {
        setBrans(brandData.filter((brand) => brand.type == client.vehicle))
    }, [client.vehicle])

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 1 }}>
                <Typography component="h1" variant="h5">
                    Registro
                </Typography>

                <FormControl fullWidth sx={{ mt: 1 }}>
                    <InputLabel id="typeLabel">Tipo</InputLabel>
                    <Select labelId="typeLabel" id="type" label="Tipo" value={client.vehicle} onChange={handleType}>
                        <MenuItem value="car">Carro</MenuItem>
                        <MenuItem value="motorcycle">Moto</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 0.1 }}>
                    <TextField margin="normal" required fullWidth id="document" label="Documento" name="document" value={client.document} onChange={handleDocument} />
                </FormControl>
                <FormControl fullWidth sx={{ mt: -1 }}>
                    <TextField margin="normal" required fullWidth id="plate" label="Placa" name="plate" value={client.plate} onChange={handlePlate} />
                </FormControl>
                <FormControl fullWidth sx={{ mt: 1 }}>
                    <InputLabel id="brandLabel">Marca</InputLabel>
                    <Select labelId="brandLabel" id="brand" label="Marca" value={client.brand} onChange={handleBrand} disabled={brands.length <= 0}>
                        {
                            brands.map((brand) => (
                                <MenuItem key={brand.id} value={brand.brand}>{brand.brand}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 0.1 }}>
                    <TextField margin="normal" required fullWidth id="model" label="Modelo" name="model" value={client.model} onChange={handleModel} disabled={client.vehicle == null || client.vehicle == "motorcycle"} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField margin="normal" required fullWidth id="cylinder" label="Cilindraje" name="cylinder" value={client.cylinder} onChange={handleCylinder} disabled={client.vehicle == null || client.vehicle == "car"} sx={{ marginTop: "8px" }} />
                </FormControl>

                <Button type="button" fullWidth variant="contained" onClick={saveClient}>
                    Registrar
                </Button>
            </Box>
        </>
    )
}

export default FormUsers