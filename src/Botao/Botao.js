import './Botao.css'

const BotaoEnviar = (props) =>{
    return(
        <button className="botao">
            {props.children}
        </button>
    )
}



const BotaoCancelar = (props) =>{
    return(
        <button className="botaoCancel botao">
            {props.children}

        </button>
    )
}

export {BotaoEnviar,BotaoCancelar}