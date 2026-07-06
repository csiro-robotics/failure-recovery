import logo from "../../rss_logo.png";
import csiroLogo from "../../csiro_logo.png";
import furgLogo from "../../furg_logo.png";
import oricaLogo from "../../orica_logo.png";
import { FC, useState, MouseEvent, memo, useCallback } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./NavigationBar.css"

const HoverNavDropdown: FC<{ item: NavigationItem }> = ({ item }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = useCallback(() => setShow(true), []);
  const handleMouseLeave = useCallback(() => setShow(false), []);

  const handleParentClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(item.path);
  };

  return (
    <NavDropdown
      title={
        <span onClick={handleParentClick} style={{ cursor: "pointer" }}>
          {item.label}
        </span>
      }
      id={`${item.label}-dropdown`}
      show={show}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.children?.map((child) => (
        <NavDropdown.Item
          as={HashLink}
          smooth
          to={child.path}
          key={child.label}
        >
          {child.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

const NavigationBar: FC<NavigationBarProps> = memo(({ navigationItems }) => {
  return (
    <Navbar
      style={{
        backgroundColor: "#003366"
      }}
      variant="dark"
      expand="lg"
      sticky="top"
    >
     <Container>
  {/* Left logo */}
  <Navbar.Brand as={HashLink} to="/" smooth>
    <img
      src={logo}
      alt="RSS 2026"
      style={{
        height: "42px",
        width: "auto",
      }}
    />
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="navbar-nav" />

  <Navbar.Collapse id="navbar-nav">
    <Nav className="mx-auto">
      {navigationItems.map((item) =>
        item.children && item.children.length > 0 ? (
          <HoverNavDropdown item={item} key={item.label} />
        ) : (
          <Nav.Link as={HashLink} smooth to={item.path} key={item.label}>
            {item.label}
          </Nav.Link>
        )
      )}
    </Nav>

    {/* Right logo */}
    {/* Right logos */}
<div
  className="ms-auto d-flex align-items-center"
  style={{ gap: "16px" }}
>
  <a
    href="https://www.csiro.au"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={csiroLogo}
      alt="CSIRO"
      style={{ height: "36px", width: "auto" }}
    />
  </a>

  <a
    href="https://www.furg.br/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={furgLogo}
      alt="FURG"
      style={{ height: "36px", width: "auto" }}
    />
  </a>

  <a
    href="https://www.orica.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={oricaLogo}
      alt="Orica"
      style={{ height: "36px", width: "auto" }}
    />
  </a>
</div>
  </Navbar.Collapse>
</Container>
    </Navbar>
  );
}, (prevProps, nextProps) => prevProps.navigationItems === nextProps.navigationItems);

export default NavigationBar;