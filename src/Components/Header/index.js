import './header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>Portal do Aluno</Link>
        </header>
    );
}


export default Header;