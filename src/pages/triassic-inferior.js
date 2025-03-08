import "./era.css";

import Nav from "../components/Nav/Nav";

const TriassicInferior = () => {
    return <div>
        <Nav/>
        <div class="triassic-inferior-bg">
            <div class="arrow-previous"><a href="map.html">.</a></div>
            <div class="dinosaur-card dino1"></div>
            <div class="dinosaur-card dino2"></div>
            <div class="dinosaur-card dino3"></div>
            <div class="arrow-next"><a href="triassic-medium.html">.</a></div>
        </div>
    </div>;
  };
  
  export default TriassicInferior;
  