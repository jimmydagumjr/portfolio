import NavbarCSS from "./../assets/css/Navbar.module.css";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <nav className={NavbarCSS.nav}>
      <div className={NavbarCSS.navContainer}>
        <div className={NavbarCSS.navFilter}>
          <div className={NavbarCSS.navPrimaryContainer}>
            <div className={NavbarCSS.navPrimary}>
              <NavbarLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavbarLinks: React.FC = () => {
  return (
    <>
      <div className={NavbarCSS.navCenter}>
        <Link to="about" smooth duration={500} spy hashSpy>
          about
        </Link>
        <Link to="experience" smooth duration={500} spy hashSpy>
          experience
        </Link>
        <Link to="projects" smooth duration={500} spy hashSpy>
          projects
        </Link>
        <Link to="contact" smooth duration={500} spy hashSpy>
          contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
