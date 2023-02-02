import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';
import './App.css';
import FormularioAluno from './Formulario/Formulario';
import FormularioCurso from './Formulario/FormularioCurso';
import FormularioDisciplina from './Formulario/FormularioDisciplina';
import FormularioProf from './Formulario/FormularioProf';
import Layout from './Layout/Layout';

function App() {
  return (
      
    <div className="App">
        <Router>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='aluno' element={<FormularioAluno/>}/>
                <Route path='professor' element={<FormularioProf/>}/>
                <Route path='disciplina' element={<FormularioDisciplina/>}/>
                <Route path='curso' element={<FormularioCurso/>}/>
              </Route>
            </Routes>
        </Router>
    </div>
    
  )
}

export default App;
