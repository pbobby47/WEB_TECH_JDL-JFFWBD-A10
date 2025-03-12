import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = props => {
  console.log(props);
  let sectionStyles = {
    height: "95vh",
    width: "98vw",
    border: "solid red",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let artcleStyles = {
    border: "solid white",
    height: "70%",
    width: "30%",
  };

  return ReactDOM.createPortal(
    <>
      <section style={sectionStyles}>
        <article style={artcleStyles}>
          <h1>Here you can do Login....</h1>

          <button
            onClick={props.closeFn}
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
            }}
          >
            skip
          </button>
        </article>
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default PortalComponent;
