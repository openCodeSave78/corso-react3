import { useState,useEffect, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/CardItem'
import CardForm from './components/CardForm'
import Example from './components/Example'
import { ProvaContext } from './stores/ProvaContext'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'

function App() {
  const cities = useSelector((state)=> state.cities.value);
  

  return (
    <>
    <Navbar></Navbar>
    <Example></Example>
    <CardForm></CardForm>
    <div className='grid grid-cols-4 gap-10'>
      
      {cities.map((city)=>(
        <Card  key={city.id} title={city.name} isVisited={city.isVisited} imgURL={city.imgURL} color={city.color} strumento={city.strumento} musica={city.musica} documento={city.documento}>{city.description}</Card>
      ))}

      </div>
      </>
  );
}

export default App;
