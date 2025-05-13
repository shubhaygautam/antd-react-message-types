import React from 'react'
import PropTypes from 'prop-types'

import styles from './InlineItem.module.scss'

const InlineItem = ({
  title,
  info,
  uppercase,
  titleBold,
  leftFullFlex,
  rightFullFlex
}) => {
  return (
    <div className={`ori-flex-row ${styles.inlineItemContainer}`}>
      <div className={`${styles.leftWrapper} ${uppercase ? 'ori-uppercase' : 'ori-capitalize'} ${leftFullFlex ? 'ori-full-flex' : ''}`}>
        <span className={`${titleBold ? 'ori-font-bold' : ''}`}>{title}</span>
      </div>
      <div className={`ori-flex-row ${styles.rightWrapper} ${rightFullFlex ? 'ori-full-flex' : ''}`}>
        <span className='ori-font-light'>{info}</span>
      </div>
    </div>
  )
}

InlineItem.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  uppercase: PropTypes.bool,
  titleBold: PropTypes.bool,
  leftFullFlex: PropTypes.bool,
  rightFullFlex: PropTypes.bool
}

InlineItem.defaultProps = {
  uppercase: false,
  titleBold: true,
  leftFullFlex: false,
  rightFullFlex: false
}

export default InlineItem
