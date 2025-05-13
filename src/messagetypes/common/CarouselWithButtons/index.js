import React, { lazy, Suspense, useState } from 'react'
import PropTypes from 'prop-types'

import CarouselBody from './CarouselBody'
import MessageWrapper from '../../../components/MessageWrapper'

const Overlay = lazy(() => import('../../../components/Overlay'))

const CarouselWithButtons = ({
  btnDisabled,
  handleMsgBtnClick,
  message,
  btnHidden,
  displayType,
  preferLang
}) => {
  const [overlay, setOverlay] = useState({ visible: false, carousel: null })

  const hideOverlay = () => setOverlay({ visible: false, carousel: null })

  return (
    <React.Fragment>
      {overlay.visible && overlay.carousel && (
        <Suspense fallback={null}>
          <Overlay onClose={hideOverlay}>
            <img
              src={overlay.carousel.mediaUrl}
              alt=''
              style={{
                maxWidth: '100%',
                maxHeight: '70vh'
              }}
            />
          </Overlay>
        </Suspense>
      )}
      <MessageWrapper
        message={message}
        preferLang={preferLang}
        component={CarouselBody}
        btnDisabled={btnDisabled}
        btnHidden={btnHidden}
        displayType={displayType}
        handleMsgBtnClick={handleMsgBtnClick}
        setOverlay={setOverlay}
      />
    </React.Fragment>
  )
}

CarouselWithButtons.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  displayType: PropTypes.string,
  preferLang: PropTypes.string
}

CarouselWithButtons.defaultProps = {
  btnDisabled: false,
  btnHidden: false
}

export { CarouselWithButtons }
