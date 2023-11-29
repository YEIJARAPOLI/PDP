/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, Fragment, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { cellsData } from "../data/cellsData"

import { Box, Snackbar, Alert, Modal, Typography, Button, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ParkingContext = createContext()

const ParkingProvider = ({ children }) => {

    const vertical = "top"
    const horizontal = "right"

    const [severity, setSeverity] = useState("info");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const navigate = useNavigate()

    const [user, setUser] = useState({ userName: "yeijara", password: 1234 })
    const [login, setLogin] = useState({ userName: "", password: "" })
    const [auth, setAuth] = useState(false)

    const validateUser = () => {
        if (user.userName == login.userName && user.password == login.password) {
            setOpen(false);
            setAuth(true)

            navigate("/", { replace: true })
        } else {
            setSeverity("error")

            if (login.userName == null || login.userName.length <= 0) {
                setMessage("Debe ingresar el Usuario")
            } else if (login.password == null || login.password.length <= 0) {
                setMessage("Debe ingresar la Clave")
            } else {
                setMessage("Las credenciales son incorrectas")
            }

            handleClick()
        }
    }

    const [clients, setClients] = useState([])
    const [client, setClient] = useState({
        id: null,
        vehicle: null,
        document: null,
        plate: null,
        brand: "",
        model: null,
        cylinder: null
    })

    const saveClient = () => {
        setSeverity("")
        setMessage("")

        if (client.vehicle != null && client.vehicle.length > 0 && client.document != null && client.document.length > 0 && client.plate != null && client.plate.length > 0 && client.brand != null && client.brand.length > 0 && ((client.vehicle == "car" && (client.model != null && client.model.length > 0)) || (client.vehicle == "motorcycle" && (client.cylinder != null && client.cylinder > 0)))) {
            if ((clients.filter((cli) => cli.plate == client.plate)).length > 0) {
                setSeverity("error")

                setMessage("La placa ya se encuentra registrada")
            } else {
                setSeverity("info")

                setMessage("Registro éxitoso")
                setClients([...clients, client])
                setClient({
                    id: "",
                    vehicle: null,
                    document: "",
                    plate: "",
                    brand: "",
                    model: "",
                    cylinder: ""
                })
            }
        } else {
            setSeverity("error")

            if (client.vehicle == null || client.vehicle.length <= 0) {
                setMessage("Debe seleccionar uno de los Tipos disponibles")
            } else if (client.document == null || client.document.length <= 0) {
                setMessage("Debe ingresar el Documento del cliente")
            } else if (client.plate == null || client.plate.length <= 0) {
                setMessage("Debe ingresar la Placa del vehiculo")
            } else if (client.brand == null || client.brand.length <= 0) {
                setMessage("Debe seleccionar una Marca disponible")
            } else if (client.vehicle.length > 0) {
                if (client.vehicle == "car" && (client.model == null || client.model.length <= 0)) {
                    setMessage("Debe ingresar el Modelo del vehiculo")
                } else if (client.vehicle == "motorcycle" && (client.cylinder == null || client.cylinder <= 0)) {
                    setMessage("Debe ingresar el Cilindraje del vehiculo")
                }
            }
        }

        if (severity.length > 0 && message.length > 0) {
            handleClick()
        }
    }

    const [cells, setCells] = useState(cellsData)
    const [cell, setCell] = useState({
        id: "",
        type: null,
        enable: true,
        info: {
            userId: null,
            plate: null,
            startDate: null,
            endDate: null
        }
    })
    const [clientInfo, setClientInfo] = useState([])
    const [cellsAvailable, setCellsAvailable] = useState([])

    const handleClient = () => {
        console.log(cell);
        if (cell.info.plate != null || cell.info.plate.length > 0) {
            setClientInfo(clients.filter((cli) => cli.plate == cell.info.plate))
            setCell({ ...cell, type: (clients.filter((cli) => cli.plate == cell.info.plate)[0].vehicle) })

            handleOpenModal()
        }
    }

    useEffect(() => {
        console.log(clientInfo);
        if (clientInfo != null && clientInfo.length > 0) {
            setCellsAvailable(cells.filter((c) => c.enable && c.type == cell.type))
        }

        console.log(cellsAvailable);
    }, [cell.type, cell.info.plate])

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleCellId = (e) => {
        setCell({ ...cell, id: e.target.value })
    }

    const park = () => {
        if (cell.id != null && cell.id > 0) {
            setCell({ ...cell, enable: false, info: { plate: clientInfo[0].plate, userId: clientInfo[0].id, startDate: new Date(), endDate: null } })
        }
    }

    useEffect(() => {
        setCells([...cells, cell])
    }, [cell.enable, cell.info.startDate])

    return (
        <>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Información ingreso
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Documento: {(clientInfo.length > 0 && clientInfo[0].document != "undefined") ? clientInfo[0].document : ""}
                        <br />
                        Placa: {(clientInfo.length > 0 && clientInfo[0].plate != "undefined") ? clientInfo[0].plate : ""}
                        <br />
                        Tipo: {(clientInfo.length > 0 && clientInfo[0].type != "undefined") ? clientInfo[0].type == "car" ? "Carro" : "Moto" : ""}
                    </Typography>
                    <hr />

                    <FormControl fullWidth sx={{ mt: 1 }}>
                        <InputLabel id="typeLabel">Seleccione la celda</InputLabel>
                        <Select labelId="typeLabel" id="type" label="Seleccione la celda" value={cell.id} onChange={handleCellId}>
                            {
                                cellsAvailable.map((celda) => (
                                    <MenuItem key={celda.id} value={celda.id}>{celda.id}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    <Button type="button" fullWidth variant="contained" onClick={park} sx={{ mt: 2 }}>
                        Guardar
                    </Button>
                </Box>
            </Modal>

            <ParkingContext.Provider value={{ user, auth, login, setLogin, validateUser, cells, cell, setCell, handleClient, client, setClient, clients, saveClient, open, setOpen }}>
                {children}
            </ParkingContext.Provider>
        </>
    )
}

export { ParkingContext }
export default ParkingProvider