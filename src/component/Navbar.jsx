import { AppBar, Box, Toolbar, } from "@mui/material";
import { Container } from "@mui/material";

const Navbar=()=>{
    return(
        <>
        <AppBar  sx={{bgcolor:"#63625d", position:'sticky', top:"0"}}>
            <Toolbar>
                <Container maxWidth="xl">
                    <Box>
                        <img src="src/assets/navbar/logo (1).svg" alt="" />
                    </Box>
                    <Box>

                    </Box>


                </Container>
            </Toolbar>
        </AppBar>
        </>
    )
};
export default Navbar