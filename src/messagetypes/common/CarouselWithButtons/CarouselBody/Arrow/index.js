import React from 'react'
import PropTypes from 'prop-types'

import styles from './Arrow.module.scss'

const Arrow = ({ text, className, style, align, onClick }) => (
  <span
    className={`${className} ${styles.arrow} ori-font-default`}
    style={{
      ...style,
      ...align,
      top: 'unset',
      bottom: '-30px',
      display: 'block'
    }}
    onClick={onClick}
  >
    {text}
  </span>
)

Arrow.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  align: PropTypes.object,
  onClick: PropTypes.func
}

export default Arrow
