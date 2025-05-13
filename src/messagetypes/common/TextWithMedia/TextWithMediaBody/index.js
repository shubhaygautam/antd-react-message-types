import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

import styles from './TextWithMediaBody.module.scss'

const Buttons = lazy(() => import('../../../../components/Buttons'))
const Header = lazy(() => import('../../../../components/Header'))
const ImageItem = lazy(() => import('../../../../components/ImageItem'))
const CheckboxGroup = lazy(() =>
  import('../../../../components/CheckboxGroup')
)
const ListItem = lazy(() => import('../../../../components/ListItem'))

const TextWithMediaBody = ({
  payload,
  message,
  handleMsgBtnClick,
  btnHidden,
  btnDisabled,
  checkboxDisabled,
  onSubmitCheckbox
}) => {
  return (
    <div
      className={`${styles.textWithMediaContainer} ${styles.ie10upTextWithMediaContainer}`}
    >
      {payload.url && (
        <iframe
          title='video-message'
          width='100%'
          src={payload.url}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      )}
      <Suspense fallback={null}>
        {payload.imageUrl && <ImageItem src={payload.imageUrl} />}
        {(payload.title || payload.subtitle) && (
          <Header title={payload.title} subtitle={payload.subtitle} />
        )}
        {payload.options && payload.options.length > 0 && (
          <CheckboxGroup
            options={payload.options}
            disabled={checkboxDisabled}
            onSubmit={onSubmitCheckbox}
          />
        )}
        {payload.list && payload.list.length > 0 && (
          <ListItem list={payload.list} />
        )}
        {!btnHidden && payload.buttons && payload.buttons.length > 0 && (
          <Buttons
            buttons={payload.buttons}
            message={message}
            disabled={btnDisabled}
            onClick={handleMsgBtnClick}
          />
        )}
      </Suspense>
    </div>
  )
}

TextWithMediaBody.propTypes = {
  payload: PropTypes.object,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  checkboxDisabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func
}

TextWithMediaBody.defaultProps = {
  btnDisabled: false,
  btnHidden: false,
  checkboxDisabled: false
}

export default TextWithMediaBody
