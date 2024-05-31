import services from "./services/info";
import Card from "./components/card";
import Form from "./components/form";
import Description from "./components/description";
import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [songInfo, setSongInfo] = useState({
    song: "N/A",
    artist: "N/A",
    album: "N/A",
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
    let interval = null; // Declare the interval variable outside the if statement

    if (userInfo) {
      interval = setInterval(() => {
        console.log(userInfo);
        services
          .getInfo(userInfo)
          .then((result) => {
            if (result.data.spotify !== null) {
              setSongInfo({
                song: result.data.spotify.song,
                artist: result.data.spotify.artist,
                album: result.data.spotify.album,
                album_art_url: result.data.spotify.album_art_url,
              });
            }
          })
          .catch((error) => {
            console.log("Error: ", error);
            setSongInfo({
              song: "N/A",
              artist: "N/A",
              album: "N/A",
              album_art_url: "https://placehold.co/400",
            });
          });
      }, 5000);
    }

    return () => clearInterval(interval); // Return the cleanup function from the useEffect callback
  }, [userInfo]);

  return (
    <>
      <Card songInfo={songInfo} />
      <Description />
      <Form
        handleUserInfoSubmit={handleUserInfoSubmit}
        newUserInfo={newUserInfo}
        handleUserInfoChange={handleUserInfoChange}
      />
    </>
  );
}

export default App;
