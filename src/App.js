import Detalhes from "./pagina/detalhes/Detalhes";
import { useState } from "react";
import Home from "./pagina/Home/Home";
import GlobalStyled, {Corfundo} from "./GlobalStyled";

function App() {
  const [trocarDePag, setTrocarDePag] = useState("0")

  const changePag = (change) => {
    setTrocarDePag(change);
  }

  return (
    <>
      <GlobalStyled />
      <Corfundo>
      {trocarDePag === "1" ? (
        <Home pagina={()=> changePag("1")}/>
      ) : (
        <Detalhes pagina={()=> changePag("0")}/>
      )}
      </Corfundo>
    </>
  );
}

export default App;
