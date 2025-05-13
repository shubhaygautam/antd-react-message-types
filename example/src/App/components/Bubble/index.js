import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from 'antd'

import styles from './Bubble.module.scss'

const Bubble = ({ children, text }) => {
  return (
    <div className={styles.bubbleContainer}>
      <Divider plain>{text}</Divider>
      <div className={styles.botBubble}>
        {children}
      </div>
    </div>
  )
}

Bubble.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  text: PropTypes.string
}

Bubble.defaultProps = {
  text: "vivek vaibhav"
}

export default Bubble
