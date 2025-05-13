import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

import styles from './Chatbot.module.scss'

const Chatbot = ({ title, children }) => {
  return (
    <div className={styles.botContainer}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <div className={styles.botBody}>
        {children}
      </div>
      <Typography.Text className="ori-text-center">Created By:- VIVEK VAIBHAV</Typography.Text>
    </div>
  )
}

Chatbot.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

Chatbot.defaultProps = {
  title: "Chatbot",
}

export default Chatbot
