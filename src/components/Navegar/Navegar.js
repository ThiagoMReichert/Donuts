import Botao from "../Botao/botao"
import { ContainerNav } from "./stylednav"

function Nav(){
    return(
        <ContainerNav>
                <Botao titulo="Donut"/>
                <Botao titulo="Ice Cream"/>
                <Botao titulo="Bomboloni"/>
        </ContainerNav>
    )

}

export default Nav