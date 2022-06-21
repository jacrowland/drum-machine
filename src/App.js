import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(50);
  const [bank, setBank] = useState("");
  const [displayContent, setDisplayContent] = useState(false);

  const appStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: 'grey'
  };

  const drumMachineStyles = {
    width: 750,
    height: 400,
    backgroundColor: "lightGrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    border: "5px solid orange",
  };

  const drumPadsStyles = {
    width: "60%",
    height: "100%",
    display: "grid",
    gridTemplateRows: "auto auto auto",
    gridTemplateColumns: "auto auto auto",
  };

  const controlsContainerStyle = {
    width: "40%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const updateDisplay = (message, timeout = 2000) => {
    setDisplayContent(message);
    if (timeout !== null) {
      const timer = setTimeout(() => setDisplayContent(""), 2000);
      return () => clearTimeout(timer);
    }
  };

  const togglePower = () => {
    setPower(!power);
    power ? updateDisplay("Power off", 2000) : updateDisplay("Power on", 2000);
  };

  const changeVolume = (level) => {
    setVolume(level);
    updateDisplay(`Volume: ${String(level)}`, 2000);
  };

  const switchBank = () => {
    setBank(!bank);
    bank
      ? updateDisplay("Heater Kit", 2000)
      : updateDisplay("Smooth Piano Kit", 2000);
  };

  return (
    <div className="App" style={appStyles}>
      <div style={drumMachineStyles} id="drum-machine">
        <div id="drum-pads" style={drumPadsStyles}>
          <DrumPad
            keycode={81}
            text={{
              heater: "Heater 1",
              chord: "Chord 1",
            }}
            clips={{
              heater:
                "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
              chord: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            Q
          </DrumPad>
          <DrumPad
            keycode={87}
            text={{
              heater: "Heater 2",
              chord: "Chord 2",
            }}
            clips={{
              heater:
                "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
              chord: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            W
          </DrumPad>
          <DrumPad
            keycode={69}
            text={{
              heater: "Heater 3",
              chord: "Chord 3",
            }}
            clips={{
              heater:
                "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
              chord: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            E
          </DrumPad>
          <DrumPad
            keycode={65}
            text={{
              heater: 'Heater 4',
              chord: 'Shaker'
            }}
            clips={{
              heater:
                "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
              chord:
                "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            A
          </DrumPad>
          <DrumPad
            keycode={83}
            text={{
              heater: 'Clap',
              chord: 'Open HH'
            }}
            clips={{
              heater:
                "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
              chord: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            S
          </DrumPad>
          <DrumPad
            keycode={68}
            text={{
              heater: 'Open HH',
              chord: 'Closed HH'
            }}
            clips={{
              heater: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
              chord: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            D
          </DrumPad>
          <DrumPad
            keycode={90}
            text={{
              heater: 'Kick n\' Hat',
              chord: 'Punchy Kick'
            }}
            clips={{
              heater:
                "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
              chord:
                "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            Z
          </DrumPad>
          <DrumPad
            keycode={88}
            text={{
              heater: 'Kick',
              chord: 'Side Stick'
            }}
            clips={{
              heater:
                "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
              chord:
                "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            X
          </DrumPad>
          <DrumPad
            keycode={67}
            text={{
              heater: 'Closed HH',
              chord: 'Snare'
            }}
            clips={{
              heater: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
              chord: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
            }}
            power={power}
            volume={volume}
            bank={bank}
            updateDisplay={updateDisplay}
          >
            C
          </DrumPad>
        </div>
        <div id="controls-container" style={controlsContainerStyle}>
          <div id="power-switch">
            <Switch title="Power" callback={() => togglePower()} />
          </div>
          <div id="display">
            <Display content={displayContent} />
          </div>
          <VolumeSlider callback={changeVolume} power={power} />
          <div id="bank-switch">
            <Switch title="Bank" callback={() => switchBank()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const VolumeSlider = (props) => {
  const containerStyles = {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const inputStyles = {
    width: "100%",
    margin: 20,
  };

  return (
    <div id="volume-slider" style={containerStyles}>
      <input
        disabled={!props.power}
        style={inputStyles}
        min="0"
        max="100"
        step="5"
        type="range"
        onChange={(e) => props.callback(e.target.value)}
      ></input>
    </div>
  );
};

const Display = (props) => {
  const styles = {
    width: "200px",
    height: 50,
    fontWeight: "bold",
    backgroundColor: "darkGrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={styles}>{props.content}</div>;
};

const DrumPad = (props) => {
  const [active, setActive] = useState(false);
  const audioClipEl = useRef(null);
  const heaterAudioClipEl = useRef(null);

  const styles = {
    backgroundColor: active ? "orange" : "grey",
    margin: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    borderRadius: "10px",
    boxShadow: active ? "unset" : "5px 5px 0px 0px black",
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
      const timer = setTimeout(() => setActive(false), 500);
      return () => clearTimeout(timer);
    }
  };

  const keydownHandler = (e) => {
    if (e.keyCode === props.keycode) {
      activatePad();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
  }, [keydownHandler, props.power]);

  useEffect(() => {
    audioClipEl.current.volume = props.volume / 100;
  }, []);

  return (
    <button
      onMouseDown={() => activatePad()}
      className="drum-pad"
      style={styles}
    >
      {props.children}
      <audio ref={audioClipEl} class="clip" src={props.clips.heater}></audio>
    </button>
  );
};

const Switch = (props) => {
  const [active, setActive] = useState(false);

  const containerStyle = {
    width: 80,
    height: 40,
    backgroundColor: "grey",
  };

  const toggleStyle = {
    width: "40%",
    float: active ? "right" : "left",
    height: "75%",
    margin: 5,
    backgroundColor: "darkorange",
    borderRadius: 5,
  };

  const onToggle = () => {
    setActive(!active);
    props.callback();
  };

  return (
    <div>
      <div
        onClick={() => onToggle()}
        style={containerStyle}
        className="switch-container"
      >
        <div style={toggleStyle} className="switch-toggle"></div>
      </div>
      <p>{props.title}</p>
    </div>
  );
};
