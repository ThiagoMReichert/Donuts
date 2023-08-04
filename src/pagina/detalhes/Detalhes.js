import Header from "../../components/Header/Header"
import seta from "../../assets/seta.png"
import ponto from "../../assets/ponto.png"
import group from "../../assets/group.png"
import donutGrande from "../../assets/Frame 9.png"
import { BotaoAddCard, BotaoMore, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextMore, TextNumber, TituloDonuts } from "./styledat"

function Detalhes(props){
    return(
        <>
            <Header 
            pagina={props.pagina}
            imgPrimeira={seta}
            imgSegunda={ponto}
            />

            <ContainerDetalhes>
                <ImagemGrande src={donutGrande} />

                <ContainerDiv>
                    <TituloDonuts>
                        Unicorn Sprinkles
                    </TituloDonuts>
                    <TituloDonuts>
                        hmmm donuts bão viu
                    </TituloDonuts>

                    <MaisProdutos>
                        <img src={group} />
                        <TextNumber>7.800</TextNumber>
                    </MaisProdutos>
                    <MaisProdutos>
                        <TextMore>Need more?</TextMore>
                        <BotaoMore>Add more</BotaoMore>
                    </MaisProdutos>

                    <BotaoAddCard>Add to cart</BotaoAddCard>
                </ContainerDiv>
            </ContainerDetalhes>
        </>
    )
}

export default Detalhes