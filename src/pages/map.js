import "./map.css";

const Map = () => {
    return <div>
        <nav>
            <div class="profile-container"></div>
            <div class="routes">
                <a href="home.html">Home</a>
                <a href="map.html">Map</a>
                <a href="encyclopedia.html">Encyclopedia</a>
                <a href="album.html">Album</a>
            </div>
        </nav>
        <header>HEADER</header>
        <div class="era-map">
            <div class="user-character"></div>
            <div class="period-btn stage-1">
                <a href="triassic-inferior.html">triassic-inferior</a>
                <div class="period-btn-bg stage-1-bg"></div>
            </div>
            <div class="period-btn stage-2">
                <a href="triassic-inferior.html">triassic-medium</a>
                <div class="period-btn-bg stage-1-bg"></div>

            </div>
            <div class="period-btn stage-3">
                <a href="triassic-inferior.html">triassic-superior</a>
                <div class="period-btn-bg stage-1-bg"></div>
            </div>
            <div class="period-btn stage-4">
                <a href="triassic-inferior.html">jurassic-inferior</a>
                <div class="period-btn-bg stage-2-bg"></div>
            </div>
            <div class="period-btn stage-5">
                <a href="triassic-inferior.html">jurassic-medium</a>
                <div class="period-btn-bg stage-2-bg"></div>
            </div>
            <div class="period-btn stage-6">
                <a href="triassic-inferior.html">jurassic-superior</a>
                <div class="period-btn-bg stage-2-bg"></div>
            </div>
            <div class="period-btn stage-7">
                <a href="triassic-inferior.html">cretaceous-inferior</a>
                <div class="period-btn-bg stage-3-bg"></div>
            </div>
            <div class="period-btn stage-8">
                <a href="triassic-inferior.html">cretaceous-medium</a>
                <div class="period-btn-bg stage-3-bg"></div>
            </div>
        </div>
    </div>;
  };
  
  export default Map;
  