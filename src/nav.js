import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames';

function Nav(props) {

  const getPrevClassNames = () => classnames('dft__nav__btn dft__nav__btn--prev', { 'dft__nav__btn--hidden': !props.hasPrevious });
  const getNextClassNames = () => classnames('dft__nav__btn dft__nav__btn--next', { 'dft__nav__btn--hidden': !props.hasNext });

  return (
    <div className="dft__nav">
      <button
        className={getPrevClassNames()}
        onClick={props.onPrevious}>
        &#10094;
        </button>
      <button
        className={getNextClassNames()}
        onClick={props.onNext}>
        &#10095;
         </button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
}

export default Nav
