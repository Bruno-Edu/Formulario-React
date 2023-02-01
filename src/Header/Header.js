import './Header.css'
import {Link} from 'react-router-dom'


function Header() {
    return(
        <nav className="navegacao">
            <ul>
                <Link to="/aluno"><li>Cadastro Aluno</li></Link>
                <Link to="/professor"><li>Cadastro Professor</li></Link>
                <Link to="/disciplina"><li>Cadastro Disciplina</li></Link>
                <Link to="/curso"><li>Cadastro Curso</li></Link>
            </ul>
        </nav>
    )
}

export default Header