import { useContext } from "react"
import { TableContainer, Paper, Table, TableHead, TableBody, TableCell, tableCellClasses, TableRow } from "@mui/material"
import { styled } from '@mui/material/styles';
import { ParkingContext } from "../context/ParkingProvider"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Clients = () => {

    const { clients } = useContext(ParkingContext)

    return (
        <TableContainer component={Paper} sx={{ m: 2, maxWidth: "97%" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Documento</StyledTableCell>
                        <StyledTableCell align="center">Vehiculo</StyledTableCell>
                        <StyledTableCell align="center">Placa</StyledTableCell>
                        <StyledTableCell align="center">Marca</StyledTableCell>
                        <StyledTableCell align="center">Modelo</StyledTableCell>
                        <StyledTableCell align="center">Cilindraje</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((client) => (
                        <StyledTableRow key={client.id}>
                            <StyledTableCell align="center" component="th" scope="row">
                                {client.document}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {
                                    client.vehicle == "car" ? "Carro" : "Moto"
                                }
                            </StyledTableCell>
                            <StyledTableCell align="center">{client.plate}</StyledTableCell>
                            <StyledTableCell align="center">{client.brand}</StyledTableCell>
                            <StyledTableCell align="center">{client.model}</StyledTableCell>
                            <StyledTableCell align="center">{client.cylinder}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Clients