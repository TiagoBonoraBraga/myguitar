import { useState } from "react";
import BandaLista from "components/BandaLista/BandaLista";
import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import AdicionaBandaModal from "components/AdicionaBandaModal/AdicionaBandaModal";

function Home() {
  const [canShowAdicionaBandaModal, setCanShowAdicionaBandaModal] = useState(false);
  const [bandaParaAdicionar, setBandaParaAdicionar] = useState();
  return (
    <div className="Home">
      <Navbar createBanda={() => setCanShowAdicionaBandaModal(true)} />
      <div className="Home__container">
        <BandaLista bandaCriada={bandaParaAdicionar}/>
        {
          canShowAdicionaBandaModal && (<AdicionaBandaModal closeModal={()=> setCanShowAdicionaBandaModal(false)}onCreateBanda={(banda) => setBandaParaAdicionar(banda)}/>)
        }
      </div>
    </div>
  );
}

export default Home;
