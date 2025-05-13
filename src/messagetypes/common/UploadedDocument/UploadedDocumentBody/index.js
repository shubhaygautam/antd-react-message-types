import React, { Fragment, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import {
  FilePdfOutlined,
  DownloadOutlined,
  ReloadOutlined,
  LoadingOutlined,
  FileImageOutlined,
  FileOutlined
} from '@ant-design/icons'

import {
  getFormattedSize,
  getFormattedFileType
} from '../../../../data/config/utils'

const ImageItem = lazy(() => import('../../../../components/ImageItem'))

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const UploadedDocumentBody = ({
  payload,
  message,
  handleDownload,
  handleRetry
}) => {
  const onClickDownload = () => {
    if (handleDownload) handleDownload(payload.fileUrl)
  }

  const onClickRetry = () => {
    if (handleRetry) handleRetry(message)
  }

  const renderFileIcon = fileType => {
    if (!fileType) return null
    if (fileType.indexOf('image/') !== -1) {
      return <FileImageOutlined className='ori-font-lg' />
    } else if (fileType === 'application/pdf') {
      return <FilePdfOutlined className='ori-font-lg' />
    } else {
      return <FileOutlined className='ori-font-lg' />
    }
  }

  const checkStatusAndRenderIcon = () => {
    if (message.status === 'pending') return <Spin indicator={antIcon} />
    else if (message.status === 'failed') {
      return <ReloadOutlined className='ori-font-lg' onClick={onClickRetry} />
    } else {
      return (
        <DownloadOutlined className='ori-font-lg' onClick={onClickDownload} />
      )
    }
  }

  return (
    <div>
      {payload.fileType.indexOf('image/') !== -1 && payload.fileUrl && !payload.isDownloadable && (
        <Suspense fallback={null}>
          <ImageItem src={payload.fileUrl} />
        </Suspense>
      )}
      <div className='ori-flex ori-flex-ac ori-lr-pad-5'>
        {renderFileIcon(payload.fileType)}
        <div className='ori-full-flex ori-lr-pad-10'>
          <p className='ori-word-break-all'>{payload.fileName}</p>
          <div>
            {payload.pages && (
              <Fragment>
                <span>{payload.pages} pages</span>
                <span className='ori-lr-mrgn-5'>•</span>
              </Fragment>
            )}
            {payload.fileType && (
              <span className='ori-uppercase'>
                {getFormattedFileType(payload.fileType)}
              </span>
            )}
            {payload.fileSize && (
              <Fragment>
                <span className='ori-lr-mrgn-5'>•</span>
                <span>{getFormattedSize(payload.fileSize)}</span>
              </Fragment>
            )}
          </div>
        </div>
        {(payload.fileType.indexOf('image/') === -1 || payload.isDownloadable) &&
          checkStatusAndRenderIcon()}
      </div>
    </div>
  )
}

UploadedDocumentBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleDownload: PropTypes.func,
  handleRetry: PropTypes.func
}

export default UploadedDocumentBody
