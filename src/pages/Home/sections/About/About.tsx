import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Container from "../../../../components/Container/Container";
import FadeInSection from "../../../../components/FadeInSection/FadeInSection";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled("section")({
  background: "transparent",
  padding: "80px 40px",
});

const SectionLabel = styled(Typography)({
  fontSize: "11px",
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
  marginBottom: "10px",
  textAlign: "center",
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(2rem, 4vw, 2.8rem)",
  fontWeight: 800,
  color: "#f5f5f0",
  letterSpacing: "-1.5px",
  lineHeight: 1,
  marginBottom: "48px",
  animation: `${fadeUp} 0.7s ease both`,
  textAlign: "center",
});

const Grid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  "@media (max-width: 768px)": { gridTemplateColumns: "1fr" },
});

const StatBlock = styled(Box)({
  borderLeft: "1px solid rgba(255,255,255,0.1)",
  paddingLeft: "20px",
});

const StatNumber = styled(Typography)({
  fontFamily: "'Syne', sans-serif",
  fontSize: "40px",
  fontWeight: 800,
  color: "#f5f5f0",
  letterSpacing: "-2px",
  lineHeight: 1,
});

const StatLabel = styled(Typography)({
  fontSize: "11px",
  color: "rgba(255,255,255,0.35)",
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginTop: "4px",
});

const EduCard = styled(Box)({
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "12px",
});

const Tag = styled("span")({
  fontSize: "12px",
  color: "rgba(255,255,255,0.6)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "3px",
  padding: "5px 12px",
});

const skillGroups = [
  { label: "Front End", skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
  { label: "Back End", skills: ["Python", "Java", "JavaScript", "Spring Boot"] },
  { label: "Práticas", skills: ["Tailwind CSS", "UI/UX Design", "GitHub", "Trello"] },
];

const About = () => (
  <Section id="about">
    <Container>
      <FadeInSection>
        <SectionLabel>Sobre mim</SectionLabel>
        <SectionTitle variant="h2">About</SectionTitle>
      </FadeInSection>

      <Grid>
        <FadeInSection delay={0.1} direction="left">
          <Box>
            <Box sx={{ display: "flex", gap: "40px", mb: 4 }}>
              <StatBlock>
                <StatNumber>3</StatNumber>
                <StatLabel>Anos estudando</StatLabel>
              </StatBlock>
              <StatBlock>
                <StatNumber>1</StatNumber>
                <StatLabel>Ano e 6 meses de experiência</StatLabel>
              </StatBlock>
            </Box>
            <EduCard>
              <Typography sx={{ fontSize: 14, color: "#f5f5f0", mb: "4px" }}>
                Análise e Desenvolvimento de Sistemas
              </Typography>
              <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                UEPB — Cursando
              </Typography>
              <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.25)", mt: "6px" }}>
                2026 → presente
              </Typography>
            </EduCard>

            <EduCard>
              <Typography sx={{ fontSize: 14, color: "#f5f5f0", mb: "4px" }}>
                Técnico em Informática
              </Typography>
              <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                IFPB — Concluído
              </Typography>
              <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.25)", mt: "6px" }}>
                2024 → 2025
              </Typography>
            </EduCard>
          </Box>
        </FadeInSection>

        <FadeInSection delay={0.2} direction="right">
          <Box>
            {skillGroups.map((group) => (
              <Box key={group.label} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {group.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </FadeInSection>
      </Grid>
    </Container>
  </Section>
);

export default About;