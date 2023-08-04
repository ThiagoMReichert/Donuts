import { BotaoNavegacao, PrimeiroMenu } from "./stylehe"
import lupa from "../../assets/search.png"
import menu from "../../assets/menu.png"


function Header(props){
    const HandlePageChange = () =>{
        props.pagina()
    }

    return(
        <PrimeiroMenu>
            <BotaoNavegacao onClick={HandlePageChange}>
            <img src={menu} alt="botao"/>
            </BotaoNavegacao>

            <BotaoNavegacao>
            <img src={lupa} alt="botao"/>
            </BotaoNavegacao>
        </PrimeiroMenu>
    )
}

export default Header