import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Card(){

    const {cardID} = useParams();

    console.log(cardID);

    const cities = useSelector((state)=>
     state.cities.value.filter((city) => city.id == cardID.toString())
     );


     console.log(cities);
    return(
        <>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold">{cities[0].name}</h1>
    <div className="flex flex-col p-4" style={{backgroundColor:cities[0].color}}>
        <img src={cities[0].imgURL} alt="" className="rounded-t-md"/>
        
            <h2 className="text-2xl text-blue font-bold">{cities[0].title}</h2>
            <p className="text-blue-200">
                {cities[0].description}
            </p>
            <p className="text-blue-200">
                {cities[0].color}
            </p>
            <p className="text-blue-200">
                {cities[0].strumento}
            </p>
            <p className="text-blue-200">{cities[0].musica}</p>
           
           
            {cities[0].isVisited && <span className="text-blue-200">V visitata</span>}
            {!cities[0].isVisited && <span className="text-blue-200">X non visitata</span>}
        
        </div>
        </>
    )
}
export default  Card;