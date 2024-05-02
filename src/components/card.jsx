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
