import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Home from "./pages/Home/Home";

const App = () => (
  <>
    <ParticlesBackground />
    <Navbar />
    <Box
      component="main"
      sx={{ pt: "64px", position: "relative", zIndex: 1, background: "transparent" }}
    >
      <Home />
    </Box>
    <Footer />
  </>
);

export default App;