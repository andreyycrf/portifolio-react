import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import Perfil from "../../../../assets/images/perfil.jpeg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroWrapper = styled("section")({
  background: "#090909",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "0 40px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
  },
});

const Photo = styled("img")({
  width: 180,
  height: 180,
  borderRadius: "50%",
  objectFit: "cover",
  border: "1.5px solid rgba(255,255,255,0.15)",
  flexShrink: 0,
  animation: `${fadeUp} 0.7s ease both`,
});

const Content = styled(Box)({
  marginLeft: 56,
  display: "flex",
  flexDirection: "column",
});

const Name = styled(Typography)({
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  fontWeight: 800,
  color: "#f5f5f0",
  letterSpacing: "-2px",
  lineHeight: 1,
  margin: 0,
  animation: `${fadeUp} 0.7s ease 0.15s both`,
});

const Role = styled(Typography)({
  fontSize: "13px",
  fontWeight: 300,
  color: "rgba(255,255,255,0.4)",
  letterSpacing: "3px",
  textTransform: "uppercase",
  margin: "10px 0 36px",
  animation: `${fadeUp} 0.7s ease 0.25s both`,
});

const Buttons = styled(Box)({
  display: "flex",
  gap: 12,
  animation: `${fadeUp} 0.7s ease 0.35s both`,
});

const Hero = () => (
  <HeroWrapper>
    <Photo src={Perfil} alt="Andrey Claudino" />
    <Content>
      <Name variant="h1">Andrey Claudino</Name>
      <Role variant="subtitle1">Developer Full Stack</Role>
      <Buttons>
        <StyledButton variant="primary" onClick={() => {}}>
          <DownloadIcon sx={{ fontSize: 16 }} />
          Download CV
        </StyledButton>
        <StyledButton variant="outline" onClick={() => {}}>
          <EmailIcon sx={{ fontSize: 16 }} />
          Contact Me
        </StyledButton>
      </Buttons>
    </Content>
  </HeroWrapper>
);

export default Hero;