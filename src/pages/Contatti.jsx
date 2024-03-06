import Navbar from "../components/Navbar";
import useCounterProva from "../hooks/useCounterProve";
function Contatti(){
useCounterProva();
    return(
        <>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold">Pagina Contatti</h1>
        </>
    )
}

export default Contatti;