import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner1.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../Components/TitleCards/TitleCards"
import Footer from "../../Components/Footer/Footer"

function Home(){
    return (
        <div className="home">
            <Navbar/>
            <div className="hero">
                <img src={hero_banner} className="banner-img"/>
                <div className="hero-caption">
                    <img src={hero_title} className="caption-img"/>
                    <p>During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.</p>
                    <div className="hero-btn">
                        <button className="btn"><img src={play_icon} alt=""/>Play</button>
                        <button className="btn dark-btn"><img src={info_icon} alt=""/>More Info</button>
                    </div>
                    <TitleCards category={"now_playing"}/>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"BlockBuster Movies"}
                category={"top_rated"}/>
                <TitleCards title={"Only on Netflix"}
                category={"popular"}/>
                <TitleCards title={"Upcoming"} category={"upcoming"}/>
                <TitleCards title={"Top Picks"} category={"now_playing"}/>
            </div>
            <hr style={{marginLeft:'6%',marginRight:'6%'}}></hr>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home