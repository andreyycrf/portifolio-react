import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import imgCVB from "../../../../assets/images/conventions.png";
import imgAVIN from "../../../../assets/images/ifpboficial_logo.jpg";
import Container from "../../../../components/Container/Container";
import FadeInSection from "../../../../components/FadeInSection/FadeInSection";

const Section = styled("section")({
  background: "transparent",
  padding: "80px 40px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
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
  textAlign: "center",
});

const ProjGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
});

const Card = styled(Box)({
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  overflow: "hidden",
  transition: "border-color 0.2s ease",
  "&:hover": { borderColor: "rgba(255,255,255,0.2)" },
});

const Thumb = styled("img")({
  width: "100%",
  height: "180px",
  objectFit: "cover",
  objectPosition: "top",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  display: "block",
});

const ProjTag = styled("span")({
  fontSize: "11px",
  color: "rgba(255,255,255,0.4)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "3px",
  padding: "3px 8px",
});

const projects = [
  {
    id: "avin",
    name: "AVIN CPA",
    image: imgAVIN,
    description: "Projeto de pesquisa pelo IFPB. Contribuí no frontend com ajustes e correções no módulo de questionários da plataforma.",
    tags: ["React", "Frontend", "Pesquisa"],
    badge: "IFPB · 6 meses",
    link: "https://www.ifpb.edu.br/cpa/apresentacao",
  },
  {
    id: "cvb",
    name: "CG Convention & Visitors Bureau",
    image: imgCVB,
    description: "Site institucional para o CVB de Campina Grande. Desenvolvido em equipe no projeto integrador do curso Aponti Bolsa Futuro Digital.",
    tags: ["React", "Frontend", "Projeto Integrador"],
    badge: "Aponti · Equipe",
    link: "https://cg-convention-e-visitors-bureau.vercel.app/",
  },
];

const Projects = () => (
  <Section id="projects">
    <Container>
      <FadeInSection>
      <SectionLabel>Trabalhos</SectionLabel>
      <SectionTitle variant="h2">Projects</SectionTitle>
      </FadeInSection>

    <ProjGrid>
      {projects.map((p, i) => (
        <FadeInSection key={p.id} delay={i * 0.15}>
        <Card key={p.id}>
            <Thumb src={p.image} alt={p.name} />
          <Box sx={{ padding: "20px" }}>
            <Typography sx={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: "#f5f5f0", mb: "8px" }}>
              {p.name}
            </Typography>
            <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, mb: "16px" }}>
              {p.description}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", mb: "16px" }}>
              {p.tags.map((t) => <ProjTag key={t}>{t}</ProjTag>)}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: 1, textTransform: "uppercase" }}>
                {p.badge}
              </Typography>
              <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                Ver projeto →
              </a>
            </Box>
          </Box>
        </Card>
        </FadeInSection>
      ))}
    </ProjGrid>
    </Container>
  </Section>
);

export default Projects;