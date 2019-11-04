import PropTypes from "prop-types";
import React from "react";
import Radium from "radium";
import styles from "./nav-styles";

function Nav(props) {
  const prevStyles = () =>
    props.hasPrevious ? styles.prev : styles.prevHidden;
  const nextStyles = () => (props.hasNext ? styles.next : styles.nextHidden);

  return (
    <div style={styles.root}>
      <button style={prevStyles()} key="prev" onClick={props.onPrevious}>
        &#10094;
      </button>
      <button style={nextStyles()} key="next" onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default Radium(Nav);
