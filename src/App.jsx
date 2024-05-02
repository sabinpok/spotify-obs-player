import services from "./services/info";
import Card from "./components/card";
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
      <Card songInfo={songInfo} />
    </>
  );
}

export default App;
