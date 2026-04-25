import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const FooterWrap = styled("footer")({
  borderTop: "1px solid rgba(255,255,255,0.06)",
  padding: "24px 40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const FooterText = styled(Typography)({
  fontSize: "12px",
  color: "rgba(255,255,255,0.2)",
  letterSpacing: "0.3px",
  textAlign: "center",
});

const Footer = () => (
  <FooterWrap>
    <FooterText>
      © 2026 Andrey Claudino. Todos os direitos reservados. — Desenvolvedor Front End
    </FooterText>
  </FooterWrap>
);

export default Footer;