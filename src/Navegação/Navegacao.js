import './Navegacao.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FormularioAluno from '../Formulario/Formulario'
import FormularioProf from '../Formulario/FormularioProf'
import FormularioDisciplina from '../Formulario/FormularioDisciplina'
import FormularioCurso from '../Formulario/FormularioCurso'

function Nav() {
    return(
        <Router>
            <nav className="navegacao">
                <ul>
                    <Link to="/aluno"><li>Cadastro Aluno</li></Link>
                    <Link to="/professor"><li>Cadastro Professor</li></Link>
                    <Link to="/disciplina"><li>Cadastro Disciplina</li></Link>
                    <Link to="/curso"><li>Cadastro Curso</li></Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/aluno" element={<FormularioAluno/>}></Route>
                <Route path="/professor" element={<FormularioProf/>}></Route>
                <Route path="/disciplina" element={<FormularioDisciplina/>}></Route>
                <Route path="/curso" element={<FormularioCurso/>}></Route>
            </Routes>
        </Router>
    )
}

export default Nav