/* eslint-disable react/prop-types */
import { Grid, Card, CardContent, Typography, CardActions, Link } from "@mui/material"

const Article = ({ article }) => {
    return (
        <>
            <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {article.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={article.url} target="_blank" variant="button" width="100%">
                            Read more...
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default Article