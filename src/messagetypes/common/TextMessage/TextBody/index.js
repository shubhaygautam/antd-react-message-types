import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'

import styles from './TextBody.module.scss'

import { isEmptyObject, linkify } from '../../../../data/config/utils'

const TextBody = ({
  message,
  payload,
  showNlpSnapshot,
  disableHtmlParser,
  editMessageNLPSnapshot
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const showTooltip = () => setTooltipVisible(true)

  const hideTooltip = () => setTooltipVisible(false)

  const handleTextClick = () => {
    if (
      editMessageNLPSnapshot &&
      showNlpSnapshot &&
      message.NLPSnapshot &&
      !isEmptyObject(message.NLPSnapshot)
    ) {
      editMessageNLPSnapshot(message)
    }
  }

  const renderHighLightedText = (text, entity, key) => {
    const start = text.substr(0, entity.startIndex)
    const value = text.substr(
      entity.startIndex,
      entity.endIndex - entity.startIndex + 1
    )
    const end = text.substr(entity.endIndex + 1)

    return (
      <div key={key} className={styles.overlayContainer}>
        <span>{start}</span>
        <Tooltip
          overlayClassName='ori-mt-tooltipOverlay'
          title={entity.type}
          placement={
            key % 3 === 0
              ? 'bottomRight'
              : key % 3 === 1
                ? 'topRight'
                : 'bottomLeft'
          }
          visible={tooltipVisible}
        >
          <span
            className={`${styles.defaultEntity} ${styles[`entity-${key}`]}`}
            style={{
              opacity: '0.3'
            }}
          >
            {value}
          </span>
        </Tooltip>
        <span>{end}</span>
      </div>
    )
  }

  if (Array.isArray(payload.text) && payload.text.length > 0) {
    return payload.text.map((text, index) => (
      <div key={index} className={styles.textBodyContainer}>
        <div
          className='ori-b-border-light ori-tb-pad-3'
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    ))
  } else {
    const intentVisibility =
      showNlpSnapshot &&
      message.NLPSnapshot &&
      !isEmptyObject(message.NLPSnapshot)
    const msgText =
      message.containsHTML || disableHtmlParser
        ? payload.text
        : linkify(payload.text)
    return (
      <div
        className={styles.textBodyContainer}
        onMouseOver={showTooltip}
        onMouseOut={hideTooltip}
      >
        <div
          className={`${styles.messageWrapper}
          ${intentVisibility ? styles.cursorPointer : ''}
          ${!message.containsHTML ? styles.WSPreWrap : ''}`}
          onClick={handleTextClick}
        >
          {disableHtmlParser ? (
            msgText
          ) : (
            <span dangerouslySetInnerHTML={{ __html: msgText }} />
          )}
        </div>
        {!message.containsHtml &&
          intentVisibility &&
          message.NLPSnapshot.entitySnapshot &&
          message.NLPSnapshot.entitySnapshot.length > 0 &&
          message.NLPSnapshot.entitySnapshot.map((entity, index) => {
            return renderHighLightedText(payload.text, entity, index)
          })}
      </div>
    )
  }
}

TextBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  showNlpSnapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disableHtmlParser: PropTypes.bool
}

TextBody.defaultProps = {
  showNlpSnapshot: false,
  disableHtmlParser: false
}

export default TextBody
