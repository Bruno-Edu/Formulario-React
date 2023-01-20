import './CampoTexto.css';
const CampoTexto= (props) =>{

    return(
        <div className="campo-texto">
           <input type = {props.type} placeholder ={props.placeholder}/>
        </div>
    )
}


export default CampoTexto

