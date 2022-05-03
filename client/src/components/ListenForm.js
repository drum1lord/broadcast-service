import { useContext, useState } from "react";
import ListenService from "../services/ListenService";
import { AudioContext } from "../index";
import utf8 from "utf8";

function ListenForm() {
  const [url, setUrl] = useState("");
  const { audio } = useContext(AudioContext);

  async function getMedia(url) {
    const response = await ListenService.fetchMedia(url);
    console.log(utf8.decode(response.headers["media-title"]));
    return response.data;
  }

  return (
    <div>
      <input
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        type="url"
        placeholder="Url"
      ></input>
      <button
        onClick={() => {
          if (url !== "") {
            audio.stop();
            setUrl("");
            getMedia(url).then((buffer) => {
              audio.play(buffer);
            });
          } else {
            audio.play();
          }
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          audio.pause();
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          audio.stop();
        }}
      >
        Stop
      </button>
    </div>
  );
}

export default ListenForm;
