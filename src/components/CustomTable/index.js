import React from 'react'
import PropTypes from 'prop-types'

const CustomTable = ({ headers, data }) => (
  <table className='ori-mt-customTable'>
    <tbody>
      <tr>
        {
          headers.map(header => {
            return (
              <th
                key={header.key}
                className='ori-lr-pad-10 ori-font-sm ori-text-center'
              >
                {header.title}
              </th>
            )
          })
        }
      </tr>
      {
        data.map((item, index) => {
          return (
            <tr key={index} className='ori-t-border-light'>
              {
                headers.map(header => {
                  return (
                    <td
                      key={header.key}
                      className='ori-lr-pad-10 ori-font-xs ori-text-center'
                    >
                      {item[header.key]}
                    </td>
                  )
                })
              }
            </tr>
          )
        })
      }
    </tbody>
  </table>
)

CustomTable.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array
}

CustomTable.defaultProps = {
  header: [],
  data: []
}

export default CustomTable
