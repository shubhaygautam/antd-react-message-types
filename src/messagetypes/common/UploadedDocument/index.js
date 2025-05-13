import React from 'react'
import PropTypes from 'prop-types'

import MessageWrapper from '../../../components/MessageWrapper'
import UploadedDocumentBody from './UploadedDocumentBody'

const UploadedDocument = ({
  preferLang,
  message,
  handleRetry,
  handleDownload
}) => (
  <MessageWrapper
    message={message}
    preferLang={preferLang}
    component={UploadedDocumentBody}
    handleRetry={handleRetry}
    handleDownload={handleDownload}
  />
)

UploadedDocument.propTypes = {
  message: PropTypes.object.isRequired,
  handleRetry: PropTypes.func,
  handleDownload: PropTypes.func,
  preferLang: PropTypes.string
}

UploadedDocument.defaultProps = {
}

export { UploadedDocument }
