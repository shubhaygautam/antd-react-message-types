import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

import styles from './CarouselItem.module.scss'

const Buttons = lazy(() => import('../../../../../components/Buttons'))
const Header = lazy(() => import('../../../../../components/Header'))

const CarouselItem = ({
  carousel,
  displayType,
  setOverlay,
  message,
  btnDisabled,
  handleMsgBtnClick
}) => {
  const renderCarouselImage = carousel => {
    if (
      carousel.mediaType &&
      carousel.mediaUrl &&
      carousel.mediaType === 'image'
    ) {
      if (displayType === 'fixed') {
        return (
          <div
            className={styles.imageContainer}
            style={{
              backgroundImage: `url(${carousel.mediaUrl})`
            }}
            onClick={() => setOverlay({ visible: true, carousel })}
          />
        )
      }
      if (displayType === 'actual') {
        return (
          <img
            src={carousel.mediaUrl}
            alt=''
            className='ori-cursor-ptr ori-full-width'
            onClick={() => setOverlay({ visible: true, carousel })}
          />
        )
      }
      return (
        <img
          src={carousel.mediaUrl}
          alt=''
          className='ori-cursor-ptr ori-full-width'
          style={{ height: '200px' }}
          onClick={() => setOverlay({ visible: true, carousel })}
        />
      )
    }
  }

  return (
    <div className={styles.carouselItem}>
      {renderCarouselImage(carousel)}
      {carousel.mediaType &&
        carousel.mediaUrl &&
        carousel.mediaType === 'video' && (
        <iframe
          title='video-message'
          src={carousel.mediaUrl}
          width='100%'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      )}
      {(carousel.title || carousel.subtitle) && (
        <Suspense fallback={null}>
          <Header
            className='ori-lr-mrgn-5'
            title={carousel.title}
            subtitle={carousel.subtitle}
          />
        </Suspense>
      )}
      {carousel.buttons && carousel.buttons.length > 0 && (
        <Suspense fallback={null}>
          <Buttons
            className='ori-pad-5'
            buttons={carousel.buttons}
            message={message}
            disabled={btnDisabled}
            onClick={handleMsgBtnClick}
          />
        </Suspense>
      )}
    </div>
  )
}

CarouselItem.propTypes = {
  carousel: PropTypes.object,
  displayType: PropTypes.string,
  setOverlay: PropTypes.func,
  message: PropTypes.object,
  btnDisabled: PropTypes.bool,
  handleMsgBtnClick: PropTypes.func
}

export default CarouselItem
