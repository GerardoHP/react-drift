import config from "./config-styles";
import Radium from "radium";

const pulse = Radium.keyframes(
  {
    "0%": { transform: "scaled3d(1,1,1)" },
    "15%": { transform: "scaled3d(1.05,1.05,1.05)" },
    "100%": { transform: "scaled3d(1,1,1)" }
  },
  "Nav"
);

const button = {
  flex: 1,
  height: config.imageHeight,
  padding: 20,
  verticalAllign: "top",
  fontSize: 50,
  background: "transparent",
  color: "#fff",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
  border: "none",
  outline: 0,
  cursor: "pointer",
  userSelect: "none",
  ":hover": {
    transition: "all 1s",
    color: "#8c9ea3",
    animation: "placeholder 1s infinite",
    animationName: pulse
  }
};

const hidden = {
  visibility: "hidden"
};

const prev = { ...button, textAlign: "left" };
const next = { ...button, textAlign: "right" };

export default {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex"
  },
  prev,
  next,
  nextHidden: { ...next, ...hidden },
  prevHidden: { ...prev, ...hidden }
};
