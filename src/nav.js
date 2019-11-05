import PropTypes from "prop-types";
import React from "react";
import styleable from "react-styleable";

import css from "./nav.module.css";

function Nav({ onPrevious, onNext, hasPrevious, hasNext, css }) {
  const getPrevClassName = () => (hasPrevious ? css.prev : css.prevHidden);
  const getNextClassName = () => (hasNext ? css.next : css.nextHidden);

  return (
    <div className={css.root}>
      <button className={getPrevClassName()} onClick={onPrevious}>
        &#10094;
      </button>
      <button className={getNextClassName()} onClick={onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool,
  css: PropTypes.object
};

export default styleable(css)(Nav);
