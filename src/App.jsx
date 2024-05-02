import services from "./services/info";
import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [songInfo, setSongInfo] = useState({
    song: "N/A",
    artist: "N/A",
    album_art_url: "https://placehold.co/400",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      services.getInfo().then((result) => {
        if (result.data.spotify !== null) {
          setSongInfo({
            song: result.data.spotify.song,
            artist: result.data.spotify.artist,
            album_art_url: result.data.spotify.album_art_url,
          });
        }
      });
      return () => clearInterval(interval);
    }, 5000);
  }, []);

  return (
    <>
      <div className="card">
        <div className="image">
          <img src={songInfo["album_art_url"]} alt="album cover art" />
        </div>
        <div className="content">
          <h1>{songInfo["song"]}</h1>
          <p>{songInfo["artist"].replaceAll(";", ", ")}</p>
          <div className="controlls">
            <a href="">
              <i className="fa fa-backward" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-pause" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-forward" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
