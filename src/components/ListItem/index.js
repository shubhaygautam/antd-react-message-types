import React from 'react'
import PropTypes from 'prop-types'

import styles from './ListItem.module.scss'

const ListItem = ({ list }) => (
  <ul className={styles.container}>
    {
      list.map((item, index) => (
        <li key={index} className={styles.item}>
          {item.label}
        </li>
      ))
    }
  </ul>
)

ListItem.propTypes = {
  list: PropTypes.array.isRequired
}

export default ListItem
