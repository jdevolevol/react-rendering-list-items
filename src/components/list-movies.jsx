import "../App.css";
import movies from "../data/movies";

function ListMovie(){
    return(
<section className="movie-list-section">
          {movies.map((item) => {
          return(
          <div className="content" key={item.title} >
          <img className="imgMovie" src={item.image} alt={item.title} />
            <ul className="listBox">
              <li>Title: {item.title} </li>
              <li>Year: {item.year}</li>
              <li>Runtime: {item.runtime}</li>
              <li className="list-genre">Genres: {item.genres.map((genre,index)=>{
                return(<span className="text-genres" key={index}>{genre}</span>)
              })}</li>
              <li>ImdbRating: {item.imdbRating}</li>
              <li>ImdbVotes: {item.imdbVotes}</li>
            </ul>
          </div>
          )})}
      </section>
      )}

      export default ListMovie