const axios = require('axios')

const url = 'https://rickandmortyapi.com/api/character/'

async function obtenerPer(){
    try{
        const respuesta = await axios.get(url);
        let personajes = respuesta.data.results
        personajes.forEach((personaje)=>{
            console.log(personaje.name)
            console.log(personaje.species)
            console.log(personaje.type)
            console.log('----')
        })
    }
    catch{
        console.log('error')
    }
}

obtenerPer()