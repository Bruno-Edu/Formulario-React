import './CampoTexto.css'
const CampoTexto_Select= (props) =>{
    return(
        <div className="campo-texto-select">
            <select>
                {props.itens.map(item=>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}


export default CampoTexto_Select