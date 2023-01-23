import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import CampoTexto_Select from "../CampoTexto/CampoTexto_Select"
import {BotaoEnviar,BotaoCancelar} from "../Botao/Botao"
import TextoArea from "../CampoTexto/TextoArea"

const FormularioCurso = () =>{

    const dias = [
        'Selecione os dias',
        '2º, 3º, 4º, 5º, 6º',
        '2º, 4º, 6º',
        '3º, 5º'
    ]
    const docente= [
        'Docente',
        'Maria',
        'José',
        'Ricardo',
        'Célia'
    ]
    

    return(
        <section className="Form">
            <h1>Cadastro de Cursos</h1>
            <form action="">
                <CampoTexto input type="text" placeholder="Nome do Curso"/>
                <div className="dividido">
                    <CampoTexto input type="number" placeholder="Descrição do Curso"/>
                    <CampoTexto_Select  itens={dias}/>
                </div >
                <TextoArea/>
    
                <div className="button">
                <BotaoEnviar>
                    Enviar
                </BotaoEnviar>
                <BotaoCancelar>
                    Cancelar
                </BotaoCancelar>
                </div>
            </form>
      </section>
    )
}

export default FormularioCurso