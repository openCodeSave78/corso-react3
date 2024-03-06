import { useState,useEffect, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/CardItem'
import CardForm from './components/CardForm'
import Example from './components/Example'
import { ProvaContext } from './stores/ProvaContext'
function formReducer(state,action){
  switch(action.type){
    case "CHANGE_FIELD":
      return {...state,[action.field]:action.value}
      case "RESET_FORM":  
      return {name:"",email:""};
      default:
        return state;
  }
}

function handleChange(e){
  console.log(e.target.value);
};

function handleSubmit(e){
  e.preventDefault();
  console.log(e);
};



function App() {
  const [count, setCount] = useState(0)
  //console.log( useState(0));
  const[data,setData] = useState([]);
  const[formState, dispatchFormState] = useReducer(formReducer,{name:'',email:''} );


  useEffect(() =>{
    //localStorage.setItem("count",count.toString());
    //document.title = count;
    //console.log("ciao da use effect");
    //[count]


    
  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>response.json())
  .then((data)=> {
    setData(data);
    console.log(data);
  });
  },[]);

  
  const handleFieldChange = (field,value) => {
    dispatchFormState({type:"CHANGE_FIELD",field,value});
  };
  
  
  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({type:"RESET_FORM"});
  };
  
  const sendForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  const [cities, setCities] = useState([
    {
      id:0,
      name:"Tokio",
      description:"Lorem testo di test",
      imgURL:"https://images.unsplash.com/photo-1549693578-d683be217e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRva2lvfGVufDB8fDB8fHww",
      isVisited:false
    },
    {
      id:1,
      name:"London",
      description:"Lorem testo di test",
      imgURL:"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9ufGVufDB8fDB8fHww",
      isVisited:true
    }
  ])

  const addCity = (city) =>{
    setCities([...cities,city]);
  }

  return (
    
    
    
      <ProvaContext.Provider value={{count, setCount}}>
    <Example></Example>
    <CardForm addCity={addCity}></CardForm>
    <div className='grid grid-cols-4 gap-10'>
      
      
      {cities.map((city)=>(
        <Card  key={city.id} title={city.name} isVisited={city.isVisited} imgURL={city.imgURL} color={city.color} strumento={city.strumento} musica={city.musica} documento={city.documento}>{city.description}</Card>
      ))}


{/**cities
.filter((city)=> city.isVisited)
.map((city)=>(
        <Card  key={city.id} title={city.name} isVisited={city.isVisited} imgURL={city.imgURL}>{city.description}</Card>
))*/}


{/**cities
.filter((city)=> !city.isVisited)
.map((city)=>(
        <Card  key={city.id} title={city.name} isVisited={city.isVisited} imgURL={city.imgURL}>{city.description}</Card>
))*/} 

      </div>
      <p className='bg-white-400 rounded-lg p-3'><b> Dati chiamata api https</b></p>

      <div className='grid grid-cols-4 gap-10'>
      
      
      {data.map((item)=>(
        <div key={item.id} className='bg-slate-400 rounded-lg p-3'>
          <p className="text-orange-500 text-b mb-2">userid:{item.userId}</p>
          <h2 className="text-xl mb-4">{item.title}</h2>
          <p className="text-gray-500">{item.body}</p>
        </div>
      ))}
      </div>
   
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => alert("ciao")}>
          alert
        </button>
        <input onChange={handleChange}/>
      </div>
     <form onSubmit={handleSubmit}>
      <button type="submit">Invia</button>
     </form>

     <div>Form</div>

     <form>

      <div>
        <label htmlFor="name">Nome:</label>
        <input 
        type="text"
        id="name"
        value={formState.name}
        onChange={(e)=> handleFieldChange("name",e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        id="email"
        name="email"
        value={formState.email}
        onChange={(e)=> handleFieldChange("email",e.target.value)}
         />
      </div>
      <button onClick={resetForm}>Reset</button>
      <button onClick={sendForm}>Invia</button>
     </form>
     </ProvaContext.Provider>
  )
}

export default App
