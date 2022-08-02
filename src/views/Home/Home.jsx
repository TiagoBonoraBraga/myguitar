import BandaLista from "components/BandaLista/BandaLista";
import "./Home.css";
import Navbar from "components/Navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <BandaLista />
      </div>
    </div>
  );
}

export default Home;
