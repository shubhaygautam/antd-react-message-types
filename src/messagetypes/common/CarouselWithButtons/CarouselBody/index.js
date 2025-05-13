import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'

import styles from './CarouselBody.module.scss'

import CarouselItem from './CarouselItem'
import Arrow from './Arrow'

const Buttons = lazy(() => import('../../../../components/Buttons'))
const Header = lazy(() => import('../../../../components/Header'))

const CarouselBody = ({
  payload,
  btnDisabled,
  handleMsgBtnClick,
  message,
  btnHidden,
  displayType,
  setOverlay
}) => {
  return (
    <div className={styles.carouselBodyContainer}>
      {(payload.title || payload.subtitle) && (
        <Suspense fallback={null}>
          <Header title={payload.title} subtitle={payload.subtitle} />
        </Suspense>
      )}
      {payload && payload.options && payload.options.length > 0 && (
        <Carousel
          className={styles.carousel}
          dots={{
            className: styles.slickDots
          }}
          nextArrow={<Arrow text='Next' align={{ right: 0 }} />}
          prevArrow={<Arrow text='Prev' align={{ left: 0 }} />}
          arrows
          autoplay
          pauseOnHover
        >
          {payload.options.map((carousel, index) => {
            return (
              <CarouselItem
                key={index}
                carousel={carousel}
                displayType={displayType}
                setOverlay={setOverlay}
                message={message}
                btnDisabled={btnDisabled}
                handleMsgBtnClick={handleMsgBtnClick}
              />
            )
          })}
        </Carousel>
      )}
      {!btnHidden && payload.buttons && payload.buttons.length > 0 && (
        <Suspense fallback={null}>
          <Buttons
            buttons={payload.buttons}
            message={message}
            disabled={btnDisabled}
            onClick={handleMsgBtnClick}
          />
        </Suspense>
      )}
    </div>
  )
}

CarouselBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  displayType: PropTypes.string,
  setOverlay: PropTypes.func
}

CarouselBody.defaultProps = {
  btnDisabled: false,
  btnHidden: false
}

export default CarouselBody
