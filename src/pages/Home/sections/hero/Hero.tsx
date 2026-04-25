import { styled } from "@mui/material/styles"
import Perfil from "../../../../assets/images/perfil.jpeg"
import { Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }))

    const StyledImage = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>
                <Container>
                    <Grid container spacing={2}>
                            <StyledImage src={Perfil} />
                        <Grid>
                            <Typography color="primary" variant="h1" sx={{ textAlign: "center" }}>Andrey Claudino</Typography>
                            <Typography color="primary" variant="h2" sx={{ textAlign: "center" }}>Developer Full Stack</Typography>

                            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                                
                                    
                            </Grid>
                            <StyledButton>

                                {<DownloadIcon/>}

                                <Typography>
                                    Download CV
                                </Typography>

                                {<EmailIcon />}

                                <Typography>
                                    Contact Me
                                </Typography>
                            
                                
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
