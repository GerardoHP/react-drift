import PropTypes from 'prop-types'
import React from 'react'
import styles from './nav-styles';

function Nav({ onPrevious, onNext, hasPrevious, hasNext }) {
  return (
    <div style={styles.root}>
      <button style={hasPrevious ? styles.prev : styles.prevHidden} onClick={onPrevious}>&#10094;</button>
      <button style={hasNext ? styles.next : styles.nextHidden} onClick={onNext}>&#10095;</button>
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
