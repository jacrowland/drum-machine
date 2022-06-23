import { useState } from "react";

const Switch = (props) => {
  const [active, setActive] = useState(false);

  const containerStyle = {
    width: 80,
    height: 40,
    backgroundColor: "black",
    marginTop: 20,
  };

  const toggleStyle = {
    width: "40%",
    float: active ? "right" : "left",
    height: "75%",
    margin: 5,
    backgroundColor: "#543ac7",
  };

  const onToggle = () => {
    setActive(!active);
    props.callback();
  };

  return (
    <>
      <div
        onClick={() => onToggle()}
        style={containerStyle}
        className="switch-container"
      >
        <div style={toggleStyle} className="switch-toggle"></div>
      </div>
      <p>{props.title}</p>
    </>
  );
};

export default Switch;
