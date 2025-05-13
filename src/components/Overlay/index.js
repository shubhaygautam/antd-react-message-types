import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import styles from './Overlay.module.scss'

import CloseIcon from '../CloseIcon'

const Overlay = ({ children, onClose }) => {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlayBody}>
        {children}
        <Button
          className={styles.button}
          size='small'
          shape='circle'
          onClick={onClose}
        >
          <CloseIcon size={16} />
        </Button>
      </div>
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClose: PropTypes.func
}

export default Overlay
