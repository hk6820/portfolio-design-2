import './Navbar.css';

const Navbar = ({ logoText, links }) => {
  if (!logoText && (!links || links.length === 0)) return null;

  return (
    <nav className="navbar">
      {logoText && <h1 className="navbar-logo">{logoText}</h1>}

      {links && links.length > 0 && (
        <ul className="navbar-links">
          {links.map((link, index) =>
            link?.label && link?.href ? (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ) : null
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
