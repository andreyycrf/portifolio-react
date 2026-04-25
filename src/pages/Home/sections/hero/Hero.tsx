import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import Avatar from "../../../../assets/images/avatar.jpeg";
import useTypewriter from "../../../../hooks/useTypewriter";
import CV from "../../../../assets/cv/curriculo.pdf";


const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroWrapper = styled("section")({
  background: "transparent",
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

const Hero = () => {
  const { displayed, done } = useTypewriter("Developer Front End", 70, 600);

  return (
    <HeroWrapper>
      <Photo src={Avatar} alt="Andrey Claudino" />
      <Content>
        <Name variant="h1">Andrey Claudino</Name>
        <Role variant="subtitle1">
          {displayed}
          <span style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "#f5f5f0",
            marginLeft: "3px",
            verticalAlign: "middle",
            animation: done ? "none" : "blink 0.7s step-end infinite",
          }} />
        </Role>
        <Buttons>
          <a href={CV} download="Andrey_Claudino_CV.pdf" style={{ textDecoration: "none" }}>
            <StyledButton variant="primary">
              <DownloadIcon sx={{ fontSize: 16 }} /> Download CV
            </StyledButton>
          </a>
        </Buttons>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;