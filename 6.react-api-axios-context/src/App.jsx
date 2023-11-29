import { Container, Typography, Grid } from "@mui/material"
import ArticlesProvider from "./context/ArticlesProvider"
import FormCategory from "./components/FormCategory"
import Articles from "./components/Articles"

const App = () => {
  return (
    <>
      <ArticlesProvider>
      <Container maxWidth="sm">
          <header>
            <Typography variant="h3" align="center" marginY={5}>
              Search News
            </Typography>

            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item>
                <FormCategory />
              </Grid>
            </Grid>

            <Articles />
          </header>
        </Container>
      </ArticlesProvider>
    </>
  )
}

export default App