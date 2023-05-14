import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Portal Acadêmico
      </Link>
    </header>
  );
};

export default Header;
