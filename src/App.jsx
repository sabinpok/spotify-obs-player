import services from "./services/info";
import Card from "./components/card";
import Form from "./components/form";
import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [songInfo, setSongInfo] = useState({
    song: "N/A",
    artist: "N/A",
    album_art_url: "https://placehold.co/400",
  });

  const [userInfo, setUserInfo] = useState("");
  const [newUserInfo, setNewUserInfo] = useState("");

  const handleUserInfoChange = (event) => {
    setNewUserInfo(event.target.value);
  };

  const handleUserInfoSubmit = (event) => {
    event.preventDefault();
    setUserInfo(newUserInfo);
    setNewUserInfo("");
  };

  useEffect(() => {
    if (userInfo) {
      const interval = setInterval(() => {
        services
          .getInfo(userInfo)
          .then((result) => {
            if (result.data.spotify !== null) {
              setSongInfo({
                song: result.data.spotify.song,
                artist: result.data.spotify.artist,
                album_art_url: result.data.spotify.album_art_url,
              });
            }
          })
          .catch((error) => {
            console.error(error);
            setSongInfo({
              song: "N/A",
              artist: "N/A",
              album_art_url: "https://placehold.co/400",
            });
          });
        return () => clearInterval(interval);
      }, 5000);
    }
  }, [userInfo]);

  return (
    <>
      <Form
        handleUserInfoSubmit={handleUserInfoSubmit}
        newUserInfo={newUserInfo}
        handleUserInfoChange={handleUserInfoChange}
      />
      <Card songInfo={songInfo} />
    </>
  );
}

export default App;
