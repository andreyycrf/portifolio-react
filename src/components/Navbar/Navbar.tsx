import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const sections = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Nav = styled("nav")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  background: "rgba(9,9,9,0.85)",
  backdropFilter: "blur(12px)",
  transition: "border-color 0.3s",
});

const NavLink = styled("a")({
  fontSize: "13px",
  color: "rgba(255,255,255,0.4)",
  textDecoration: "none",
  letterSpacing: "0.5px",
  paddingBottom: "2px",
  position: "relative",
  transition: "color 0.2s",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 0,
    height: "1px",
    background: "#f5f5f0",
    transition: "width 0.25s ease",
  },
  "&:hover": {
    color: "#f5f5f0",
    "&::after": { width: "100%" },
  },
  "&.active": {
    color: "#f5f5f0",
    "&::after": { width: "100%" },
  },
});

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Nav>
      <Box sx={{ display: "flex", gap: "36px" }}>
        {sections.map(({ label, href }) => (
          <NavLink
            key={href}
            href={href}
            className={active === href ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {label}
          </NavLink>
        ))}
      </Box>
    </Nav>
  );
};

export default Navbar;