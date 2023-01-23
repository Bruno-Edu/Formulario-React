import "./FormularioProf.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import CampoTexto_Select from "../CampoTexto/CampoTexto_Select"

import {BotaoEnviar,BotaoCancelar} from "../Botao/Botao"

const FormularioProf = () =>{

    const relacionamento =[
        'Estado Civil',
        'Solteiro',
        'Casado',
        'Divorciado',
        'Viúvo'
    ]
    const formacao =[
        'Formação Acadêmica',
        'Técnico',
        'Graduação',
        'Pós-Graduação',
        'Mestrado',
        'Doutorado'
    ]
    const sexo = [
        'Selecione o Sexo',
        'Feminino',
        'Masculino',
        'Outros'
    ]
    const disciplina= [
        'Disciplina Ministrada',
        'Enfermagem',
        'Informática',
        'Segurança do Trabalho'
    ]
    const horario=[
        'Selecione o Horário',
        'Manhã',
        'Tarde',
        'Noite'
    ]
    

    return(
        <section className="Form">
            <h1>Cadastro de Professor</h1>
            <form action="">
                <CampoTexto input type="text" placeholder="Nome Completo"/>
                <div className="dividido">
                    <CampoTexto input type="date"/>
                    <CampoTexto_Select  itens={sexo}/>
                </div >
                <CampoTexto_Select itens={relacionamento}/>
                <CampoTexto_Select itens={formacao}/>
                <div className="dividido">
                    <CampoTexto input type="text" placeholder="Cidade"/>
                    <CampoTexto input type="text" placeholder="Estado"/>
                </div>
                <div className="dividido">
                    <CampoTexto input type="text" placeholder="Telefone"/>
                    <CampoTexto input type="text" placeholder="E-mail"/>
                </div>
                <div className="dividido">
                    <CampoTexto_Select  itens={disciplina}/>
                    <CampoTexto_Select  itens={horario}/>
                </div>
                
                    
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

export default FormularioProf