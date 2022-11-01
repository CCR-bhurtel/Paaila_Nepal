import React from "react";
import Fade from "react-reveal/Fade";

function FadeAnimation(props) {
  return <Fade>{props.children}</Fade>;
}

export default FadeAnimation;
