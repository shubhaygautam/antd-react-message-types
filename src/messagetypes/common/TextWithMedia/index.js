import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import TextWithMediaBody from './TextWithMediaBody'

const TextWithMedia = ({
  preferLang,
  message,
  handleMsgBtnClick,
  btnHidden,
  btnDisabled,
  checkboxDisabled,
  onSubmitCheckbox
}) => (
  <MessageWrapper
    message={message}
    preferLang={preferLang}
    component={TextWithMediaBody}
    btnDisabled={btnDisabled}
    btnHidden={btnHidden}
    checkboxDisabled={checkboxDisabled}
    handleMsgBtnClick={handleMsgBtnClick}
    onSubmitCheckbox={onSubmitCheckbox}
  />
)

TextWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  checkboxDisabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func,
  preferLang: PropTypes.string
}

TextWithMedia.defaultProps = {
  btnDisabled: false,
  btnHidden: false,
  checkboxDisabled: false
}

export { TextWithMedia }
