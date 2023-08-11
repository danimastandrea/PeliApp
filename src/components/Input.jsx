import { useState, useEffect } from "react"
import './Input.css'


const Input = () => {
  const [peliculas, setPeliculas]= useState([]);
   const [busqueda, setBusqueda]= useState("");
     const apiKey="c9f04fa4";

     useEffect( ()=>{
         fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${busqueda}`)
          .then (respuesta=>respuesta.json())
          .then(data=> {
            setPeliculas(data.Search)
          })
          .catch(error=>console.log(error))

     }, [busqueda])

     const btnSearch = () =>{
      event.preventDefault();
      setBusqueda(event.target.busqueda.value)
     }

    
  return (
    <section className="sectionPeli">

    <div className="input-group mb-3">
      <form onSubmit={btnSearch}>
       
    <input required="" type="text" name="busqueda" className="input" placeholder="Search For Movies" aria-label="Search For Movies" aria-describedby="button-addon2"/>
    <button type="submit" className="btn"  >Search</button>
    </form>
  </div>
   
  <section className="container-cards" >
    {
      !peliculas &&  <h4 >no esta disponible</h4> 
      }

      {
        peliculas && peliculas.map(peli=>{
          return(
            <article key={peli.imdbID} className="mapContainer">
           <div className="card" >          
           <div className="card-body"  >  
           <img className="card-img-top" src={peli.Poster} alt={peli.Title}/> 
          <p className="card-text">
          {peli.Title} 
            </p> 
           </div>

           </div>
            </article>
  
          )   })
      }
  </section>
  




</section>
   
  )
}

export default Input
