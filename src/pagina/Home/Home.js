import Tituloheader from "../../components/TituloHeader/Tituloheader"
import { SectionCard } from "./stylehome"
import Nav from "../../components/Navegar/Navegar";
import Header from "../../components/Header/Header"
import Card from "../../components/Card/card"
import menu from "../../assets/menu.png"
import lupa from "../../assets/search.png"


function Home(props){
    
    return(
        <>
            <Header 
            pagina={props.pagina}
            imgPrimera={menu}
            imgSegunda={lupa}
            />
            
            <Tituloheader />

            <Nav />

            <SectionCard>
                <Card />
                <Card />
                <Card />
                <Card />
            </SectionCard>
        </>
    )

}

export default Home