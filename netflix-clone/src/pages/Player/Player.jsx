import "./Player.css"
import back_arrow from "../../assets/back_arrow_icon.png"
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Player(){

    const {id} = useParams();

    const navigate = useNavigate()

    const [apidata,setData] = useState({
        name:"",
        key:"",
        published_at:"",
        typeof:""
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc2YjI2NGIxNWIxYTYzOWFhMDczZTA3OTc5MTUwMiIsIm5iZiI6MTczNDU3NjE5OC4yNTcsInN1YiI6IjY3NjM4ODQ2OTQxOTZhYWVkMmZmZjllYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78euRZlEbx2FgUnZXCJHSvlR4scZa1N59BvYXi7PTLI'
        }
      };
      useEffect(()=>{
       
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setData(res.results[0])
            /* if (res.success === false) {
                console.warn("API Error:", res.status_message);
                setData([]); // Set empty data to handle invalid responses gracefully
                return;
            }

            if (Array.isArray(res.results) && res.results.length > 0) {
                setData(res.results[0]);
            } else {
                console.warn("No videos found for the given movie ID.");
                setData([]); // Handle cases where results is empty or undefined
            } */
        
        )
        .catch(err => console.error(err));
      },[])

      console.log(apidata)
      
    return (
        <div className="player">
            <img src={back_arrow} onClick={()=>navigate('/')}/>
            <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apidata.key}`} title="trailer" frameBorder= '0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apidata.published_at}</p>
                <p>{apidata.name}</p>
                <p>{apidata.typeof}</p>
            </div>

        </div>
    )
}

export default Player