const VolumeSlider = (props) => {
  const containerStyles = {
    width: "100%",
    height: "auto",
    marginTop: 20,
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

export default VolumeSlider;
