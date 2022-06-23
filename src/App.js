import { useState } from "react";
import "./App.css";
import VolumeSlider from "./components/VolumeSlider";
import Display from "./components/Display";
import Switch from "./components/Switch";
import Drumpads from "./components/Drumpads";

function App() {
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(50);
  const [bank, setBank] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);

  const appStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: "#543ac7",
  };

  const drumMachineStyles = {
    width: 750,
    height: 400,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    border: "5px solid black",
    boxShadow: "5px 5px 0px 0px black",
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
        <Drumpads
          power={power}
          bank={bank}
          volume={volume}
          updateDisplay={updateDisplay}
        />
        <div id="controls-container" style={controlsContainerStyle}>
          <div id="power-switch">
            <Switch title="Power" callback={() => togglePower()} />
          </div>
          <Display content={displayContent} />
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
