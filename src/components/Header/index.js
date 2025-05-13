import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, subtitle, className }) => {
  return (
    <React.Fragment>
      {title && (
        <div
          className={`ori-font-bold ori-no-b-mrgn ori-font-sm ori-word-break-all ${className}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subtitle && (
        <div
          className={`ori-font-13 ori-no-b-mrgn ori-word-break-all ${className}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </React.Fragment>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string
}

Header.defaultProps = {
  className: ''
}

export default Header
