import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Container from "../../../../components/Container/Container";
import FadeInSection from "../../../../components/FadeInSection/FadeInSection";


const Section = styled("section")({
  padding: "80px 0",
  borderTop: "1px solid rgba(255,255,255,0.06)",
});

const SectionLabel = styled(Typography)({
  fontSize: "11px",
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
  marginBottom: "12px",
  textAlign: "center",
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(2rem, 4vw, 2.8rem)",
  fontWeight: 800,
  color: "#f5f5f0",
  letterSpacing: "-1.5px",
  lineHeight: 1,
  marginBottom: "16px",
  textAlign: "center",
});

const Sub = styled(Typography)({
  fontSize: "14px",
  color: "rgba(255,255,255,0.35)",
  lineHeight: 1.6,
  maxWidth: "380px",
  marginBottom: "56px",
  textAlign: "center",  
  margin: "0 auto 56px",
});

const Card = styled("a")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "20px 24px",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.03)",
  textDecoration: "none",
  transition: "border-color 0.2s, background 0.2s",
  "&:hover": {
    borderColor: "rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.06)",
    "& .arrow": { color: "rgba(255,255,255,0.6)", transform: "translateX(3px)" },
    
  },
});

const IconBox = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: "8px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "#f5f5f0",
  "& svg": { width: 18, height: 18 },
});

const InfoLabel = styled(Typography)({
  fontSize: "11px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.25)",
  marginBottom: "3px",
});

const InfoValue = styled(Typography)({
  fontSize: "14px",
  color: "rgba(255,255,255,0.7)",
});

const Arrow = styled(Typography)({
  fontSize: "16px",
  color: "rgba(255,255,255,0.2)",
  transition: "color 0.2s, transform 0.2s",
});

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contacts = [
  {
    label: "Email",
    value: "andreyclaudinoass@gmail.com",
    href: "mailto:andreyclaudinoass@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "GitHub",
    value: "github.com/andreyycrf",
    href: "https://github.com/andreyycrf",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/andrey-claudino",
    href: "https://www.linkedin.com/in/andrey-claudino/",
    icon: <LinkedInIcon />,
  },
];

const Contact = () => (
  <Section id="contact">
    <Container>
      <FadeInSection>
    <SectionLabel>Vamos conversar</SectionLabel>
    <SectionTitle variant="h2">Contact</SectionTitle>
    <Sub>
      Estou aberto a novas oportunidades e colaborações. Fique à vontade para entrar em contato!
    </Sub>
    </FadeInSection>

    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "480px" }}>
      {contacts.map(({ label, value, href, icon }, i) => (
        <FadeInSection key={label} delay={i * 0.15}>
        <Card key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel="noreferrer">
          <IconBox>{icon}</IconBox>
          <Box sx={{ flex: 1 }}>
            <InfoLabel>{label}</InfoLabel>
            <InfoValue>{value}</InfoValue>
          </Box>
          <Arrow className="arrow">→</Arrow>
        </Card>
        </FadeInSection>
      ))}
    </Box>
    </Container>
  </Section>
);

export default Contact;