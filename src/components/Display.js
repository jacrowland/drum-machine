const Display = (props) => {
  const styles = {
    width: "200px",
    height: 50,
    marginTop: 20,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
      <div id="display">
        <div style={styles}>{props.content}</div>
      </div>
  )
};

export default Display;
