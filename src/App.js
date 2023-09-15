import "./App.css";

import { useEffect, useRef, useState } from "react";
import Timeline from "./components/Timeline/Timeline";
import fiat from "./assets/photos/fiat.png";
import { Dialog } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

function App() {
  const videoEl = useRef(null);
  const [open, setOpen] = useState(true);

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
        <img src={fiat} className="App-logo" alt="logo" />

        <Timeline />
        <Dialog
          sx={{
            "& .MuiDialog-container": {
              alignItems: "flex-end",
              justifyContent: "flex-start",
            },
          }}
          PaperProps={{
            sx: {
              width: 150,
              height: 150,
              m: 0,
              p: 0,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              background: "transparent",
            },
          }}
          slotProps={{
            backdrop: { sx: { background: "rgba(0, 0, 0, 0.75)" } },
          }}
          onClose={() => {
            setOpen(false);
          }}
          onClick={() => setOpen(false)}
          open={open}
        >
          <ReplyIcon
            className="flipX"
            sx={{
              transform: "scale(5) rotate(-90deg)",
              ml: 3,
              mb: 12,
              color: "#fff",
            }}
          />
        </Dialog>
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
            height: "10vh",
          }}
        />
      </header>
    </div>
  );
}

export default App;
