import "./App.css";

import { useEffect, useRef } from "react";
import Timeline from "./components/Timeline/Timeline";

function App() {
  const videoEl = useRef(null);

  useEffect(() => {
    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };
    attemptPlay();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Timeline />

        <audio
          loop
          ref={videoEl}
          id="video"
          src={
            "https://res.cloudinary.com/dajbm4ku6/video/upload/v1693865274/merve/can-bonomo-iyi-ki-dogdun_p9zwsx.mp3"
          }
          autoPlay={true}
          controls
          preload={"auto"}
          style={{
            width: "100%",
            boxShadow: "10px 10px 10px #aaaaaa",
            position: "sticky",
            bottom: 0,
          }}
        />
      </header>
    </div>
  );
}

export default App;
