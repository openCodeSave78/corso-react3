import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
function CardsChildren(){
    const cities = useSelector((state)=> state.cities.value);
    

    return(
        <>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold mb-10">
            Pagina con tutte le cards con link a sottopagina Children
        </h1>
        <div className='grid grid-cols-4 gap-10'>
      
      {cities.map((city)=>(
        <Link to={'/cards/' + city.id} key={city.id}>
        <CardItem  key={city.id} title={city.name} isVisited={city.isVisited} imgURL={city.imgURL} color={city.color} strumento={city.strumento} musica={city.musica} documento={city.documento}>{city.description}</CardItem>
        </Link>
      ))}

      </div>
      <Outlet/>
      </>
    )
}

export default CardsChildren;