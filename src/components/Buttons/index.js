import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import styles from './Buttons.module.scss'

const Buttons = ({ buttons, type, disabled, message, onClick, className }) => (
  <div className={`${styles.buttonsContainer} ${className}`}>
    {
      buttons.map((btn, index) => {
        return (
          <Button
            key={index}
            size='small'
            type={type}
            className={styles.button}
            disabled={disabled}
            onClick={() => onClick(btn, message)}
          >
            {btn.text}
          </Button>
        )
      })
    }
  </div>
)

Buttons.propTypes = {
  type: PropTypes.string,
  buttons: PropTypes.array,
  message: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
}

Buttons.defaultProps = {
  type: 'primary',
  disabled: false,
  className: ''
}

export default Buttons
