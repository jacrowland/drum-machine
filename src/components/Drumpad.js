import { useState, useRef, useEffect } from "react";

const DrumPad = (props) => {
  const [active, setActive] = useState(false);
  const audioClipEl = useRef(null);

  const styles = {
    backgroundColor: active ? "#3ac76b" : "black",
    color: "white",
    margin: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    borderRadius: "2px",
    boxShadow: active ? "unset" : "5px 5px 0px 0px #543ac7",
  };

  const activatePad = () => {
    props.power ? setActive(true) : setActive(false);
    if (props.power) {
      audioClipEl.current.src = props.bank
        ? props.clips.heater
        : props.clips.chord;
      audioClipEl.current.play();
      props.bank
        ? props.updateDisplay(props.text.chord, null)
        : props.updateDisplay(props.text.heater, null);
      const timer = setTimeout(() => setActive(false), 250);
      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    const keydownHandler = (e) => {
      if (e.keyCode === props.keycode) {
        activatePad();
      }
    };

    window.addEventListener("keydown", keydownHandler);
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  });

  useEffect(() => {
    audioClipEl.current.volume = props.volume / 100;
  }, [props.volume]);

  return (
    <button
      onMouseDown={() => activatePad()}
      className="drum-pad"
      style={styles}
    >
      {props.children}
      <audio ref={audioClipEl} class="clip" id={props.children} src={props.clips.heater}></audio>
    </button>
  );
};

export default DrumPad;
