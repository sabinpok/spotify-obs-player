export default function Card({ songInfo }) {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={songInfo["album_art_url"]} alt="album cover art" />
        </div>
        <div className="content">
          <h1>{songInfo["song"]}</h1>
          <p>{songInfo["artist"].replaceAll(";", ", ")}</p>
          <p>{songInfo["album"]}</p>
        </div>
      </div>
    </>
  );
}
