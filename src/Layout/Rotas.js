
import FormularioAluno from '../Formulario/Formulario'
import FormularioProf from '../Formulario/FormularioProf'
import FormularioDisciplina from '../Formulario/FormularioDisciplina'
import FormularioCurso from '../Formulario/FormularioCurso'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from '../App'

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                    <Route index element={<FormularioAluno/>}/> 
                    <Route path="professor" element={<FormularioProf/>}/>
                    <Route path="disciplina" element={<FormularioDisciplina/>}/>
                    <Route path="curso" element={<FormularioCurso/>}/>
                <Route/>
            </Routes>
        </Router>
    )
}
export default AppRoutes;