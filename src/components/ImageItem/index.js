import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd'

const ImageItem = memo(({ src }) => {
  return (
    <React.Fragment>
      <Image
        src={src}
        alt=''
      />
    </React.Fragment>
  )
})

ImageItem.propTypes = {
  src: PropTypes.string
}

ImageItem.defaultProps = {
  className: ''
}

export default ImageItem
