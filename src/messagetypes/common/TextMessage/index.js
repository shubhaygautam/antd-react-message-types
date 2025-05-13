import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import TextBody from './TextBody'

const TextMessage = ({
  preferLang,
  message,
  showNlpSnapshot,
  disableHtmlParser,
  editMessageNLPSnapshot
}) => {
  return (
    <MessageWrapper
      message={message}
      preferLang={preferLang}
      component={TextBody}
      primaryMessageProps={{
        showNlpSnapshot,
        disableHtmlParser,
        editMessageNLPSnapshot
      }}
    />
  )
}

TextMessage.propTypes = {
  preferLang: PropTypes.string,
  message: PropTypes.object.isRequired,
  showNlpSnapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disableHtmlParser: PropTypes.bool
}

TextMessage.defaultProps = {
  showNlpSnapshot: false,
  disableHtmlParser: false
}

export { TextMessage }
