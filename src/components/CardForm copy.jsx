import { useState, useContext } from 'react'
import { ProvaContext } from '../stores/ProvaContext';

function CardForm({addCity}){

    const {count} = useContext(ProvaContext)
   
const [formData, setFormData] =  useState({
    name:"",
    description:"",
    imgURL:"",
isVisited:false,
checked:false,
color:"red",
strumento:"",
musica:"",
documento:""
})

const handleInputChange = (e)=> {
    
    const {name, value, type,checked} = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
        ...formData,[name]:inputValue,
        });
}

const handleInputChangeSelectMultipla = (e)=> {
    console.log(e.target.type);
    const inputValue =  Array.from(e.target.selectedOptions, option => option.value);
   
    setFormData({
        ...formData,['strumento']:inputValue,
        });
}

const handleSubmit = (e) => {
e.preventDefault();
console.log(formData);

var strumenti = formData.strumento;
var viewStrumenti='';
Object.keys(strumenti).forEach(function(key) {
    //console.log(key, strumenti[key]);

    if(key==0){
        viewStrumenti =  strumenti[key];  
    }
    viewStrumenti =  viewStrumenti + ',' + strumenti[key];
});



    const city = {
    id:Math.random(),
    name:formData.name,
    description:formData.description,
    imgURL:formData.imgURL,
    isVisited:formData.isVisited,
    color:formData.color,
    strumento:viewStrumenti,
    musica:formData.musica,
    documento:formData.documento
};




console.log(city);

addCity(city);




setFormData({
    name:"",
    description:"",
    imgURL:"",
isVisited:false,
checked:false,
color:"red",
strumento:"",
musica:"",
documento:""
    });

};

    return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
        <div className="flex flex-col">
            <label className="bg-zinc-200">Nome Città</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
        </div>
        <div className="flex flex-col">
            <label className="bg-zinc-200">Descrizione {count}</label>
        <textarea type="text" name="description" value={formData.description} onChange={handleInputChange}></textarea>
        </div>
        <div className="flex flex-col">
            <label className="bg-zinc-200">Immagine</label>
        <input type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange}></input>
        </div>
        <div className="flex flex-col">
            <label className="bg-zinc-200">Visitata?</label>
        <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange}></input>
        </div>
        <div className="flex flex-col">
            <label className="bg-zinc-200">Colore</label>
            <select name="color" value={formData.color} onChange={handleInputChange}>
                <option value="red">Rosso</option>
                <option value="green">Verde</option>
                <option value="blue">Blue</option>
            </select>
        </div>
        <div className="flex flex-col">
            <label className="bg-zinc-200">Strumenti</label>
            <select name="strumento" size="3" multiple={true} onChange={handleInputChangeSelectMultipla}>
                <option value="Chitarra" >Chitarra</option>
                <option  value="Batteria">Batteria</option>
                <option value="Basso">Basso</option>
                <option value="Tastiera" >Tastiera</option>
            </select>
        </div>

        <div className="flex flex-col">
            <label className="bg-zinc-200">Musica</label>
            <p className="bg-zinc-50 p-3 gap-3  w-200">Rock <input type="radio" name="musica" value="Rock" onChange={handleInputChange}></input></p>
            <p className="bg-zinc-50 p-3 gap-3 w-200">Pop <input type="radio" name="musica" value="Pop" onChange={handleInputChange}></input></p>
            <p className="bg-zinc-50 p-3 gap-3 w-200">Jazz <input type="radio" name="musica" value="Jazz" onChange={handleInputChange}></input></p>
            </div>

            <div className="flex flex-col">
            <label className="bg-zinc-200">Documento</label>
            <p className="bg-zinc-50 p-3 gap-3  w-200"> <input type="file" name="documento" onChange={handleInputChange}></input></p> 
            </div>
        <button className="bg-zinc-100" type="submit">Aggiungi Card</button>
        </form>
    )
}
export default  CardForm;