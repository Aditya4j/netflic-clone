import "./TitleCards.css"
import cards_data from "../../assets/cards/Cards_data"
import { useEffect,useRef,useState } from "react";
import { Link } from "react-router-dom";




function TitleCards({title,category}){

    const cardsRef = useRef();
    const [apidata,setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc2YjI2NGIxNWIxYTYzOWFhMDczZTA3OTc5MTUwMiIsIm5iZiI6MTczNDU3NjE5OC4yNTcsInN1YiI6IjY3NjM4ODQ2OTQxOTZhYWVkMmZmZjllYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78euRZlEbx2FgUnZXCJHSvlR4scZa1N59BvYXi7PTLI'
        }
      };
    
    
    useEffect(()=>{
        if(!category ){
            return
         }
          fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
             
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err));
    },[category])

    

    const handleWheel =(e)=>{
        e.preventDefault();
        cardsRef.current.scrollLeft+=e.deltaY
    
    }
    useEffect(()=>{
        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])

    return(
        <div className="title-card">
           <h1>{title?title:"Popular on Netflix"}</h1>
           <div className="card-list" ref={cardsRef}>
            {apidata.map((value,index)=>(
                <Link to={`/player/${value.id}`} className="card" >
                    <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`}/>
                    <p>{value.title}</p>
                </Link>
            ))}
           </div>
        </div>
    )
}

export default TitleCards