import "./encyclopedia.css";
import Nav from "../components/Nav/Nav";

const Encyclopedia = () => {
    return <div>
        <Nav/>
        <div className="encyclopedia-container">
            <div className="arrow-previous"><a href="map.html">.</a></div>
            <div className="title">Triassic Period</div>
            <div className="dino-card-container">
                <div className="dino-card">
                    <div className="dinosaur dinosaur-1"></div>
                </div>
                <div className="dino-card dinosaur-2"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
                <div className="dino-card"></div>
            </div>
            <div class="arrow-next"><a href="triassic-medium.html">.</a></div>
        </div>
    </div>;
  };
  
  export default Encyclopedia;
  