import "./map.css";
import Nav from "../components/Nav/Nav";
import {Link} from "react-router-dom";

const Map = () => {
    return <div class="map-background">
        <Nav/>
        <header>HEADER</header>
        <div class="era-map">
            <div className="moving-sky"></div>
            <div class="user-character"></div>
            <div class="period-btn stage-1">
                <Link to="/triassic-inferior">triassic-inferior</Link>
                <div class="period-btn-bg stage-1-bg"></div>
            </div>
            <div class="period-btn stage-2">
                <Link to="/triassic-inferior">triassic-medium</Link>
                <div class="period-btn-bg stage-1-bg"></div>

            </div>
            <div class="period-btn stage-3">
                <Link to="/triassic-inferior">triassic-superior</Link>
                <div class="period-btn-bg stage-1-bg"></div>
            </div>
            <div class="period-btn stage-4">
                <Link to="/triassic-inferior">jurassic-inferior</Link>
                <div class="period-btn-bg stage-2-bg"></div>
            </div>
            <div class="period-btn stage-5">
                <Link to="/triassic-inferior">jurassic-medium</Link>
                <div class="period-btn-bg stage-2-bg"></div>
            </div>
            <div class="period-btn stage-6">
                <Link to="/triassic-inferior">jurassic-superior</Link>
                <div class="period-btn-bg stage-2-bg"></div>
            </div>
            <div class="period-btn stage-7">
                <Link to="/triassic-inferior">cretaceous-inferior</Link>
                <div class="period-btn-bg stage-3-bg"></div>
            </div>
            <div class="period-btn stage-8">
                <Link to="/triassic-inferior">cretaceous-medium</Link>
                <div class="period-btn-bg stage-3-bg"></div>
            </div>
        </div>
    </div>;
  };
  
  export default Map;
  