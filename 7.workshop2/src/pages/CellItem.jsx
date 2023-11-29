/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from "@mui/material"
import { TwoWheeler, DriveEta } from '@mui/icons-material'

const CellItem = ({ key, cell }) => {
    return (
        <>
            <Grid item key={key}>
                <Paper sx={{ height: 140, width: 100 }}>
                    <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
                        <Grid item xs={12} sx={{ paddingTop: 1 }}>
                            {
                                (cell.type == "car") ? <DriveEta /> : <TwoWheeler />
                            }
                        </Grid>
                        <Grid item xs={12} sx={{ paddingTop: 1 }}>
                            <Typography variant="h4" sx={{ width: "41.98px", backgroundColor: cell.enable ? "#EDF7ED" : "#FDEDED", borderRadius: "50%", marginLeft: "28px" }}>{cell.id}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ backgroundColor: "#F3AB01", margin: "10px", padding: "5px", borderRadius: "6px", position: "relative", minHeight: "34px" }}>
                            <Typography>{cell.info.plate}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </>
    )
}

export default CellItem