import { BotaoEstilo } from "./styledbotao"
function botao(props) {

    return(

        <BotaoEstilo>
            {props.titulo}
        </BotaoEstilo>

    )
}

export default botao