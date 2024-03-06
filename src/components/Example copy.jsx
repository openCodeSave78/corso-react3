import { useState, useEffect,useContext } from "react";
import { ProvaContext } from "../stores/ProvaContext";

function Example(){
    const {count, setCount} = useContext(ProvaContext)

    //const [count, setCount] = useState(0);
    //const[data,setData] = useState(null);
    // Definizione dell'effetto
    //useEffect(() =>{
    //    localStorage.setItem("count",count.toString());
    //    document.title = count;
    //    console.log("ciao da use effect");
       
    
    
//},[count]);


    //const handleClick = () => {
    //    setCount(count +1);     
    //};


    return(
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count+1)}>Incrementa</button>
        </div>
    );
}

export default Example;