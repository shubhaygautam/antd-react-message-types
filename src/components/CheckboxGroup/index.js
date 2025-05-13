/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import styles from './CheckboxGroup.module.scss'

const CheckboxGroup = ({ options, disabled, onSubmit }) => {
  const [checkedItems, setCheckedItems] = useState([])

  const handleChange = event => {
    const value = event.target.value
    const filterItems = checkedItems.filter(item => item !== value)
    setCheckedItems(filterItems.length === checkedItems.length ? [...checkedItems, value] : filterItems)
  }

  const handleSubmit = () => {
    onSubmit(checkedItems)
  }

  return (
    <div className={styles.checkboxContainer}>
      {
        options.map((option, index) => {
          return (
            <span key={index} className={styles.checkboxWrapper}>
              {
                !disabled
                  ? <input
                    type='checkbox'
                    id={index}
                    value={option.value}
                    onChange={handleChange}
                  /> : <span>{index + 1}. </span>
              }
              <span className={styles.label}>{option.label}</span>
            </span>
          )
        })
      }
      {
        !disabled &&
        <Button
          type='primary'
          size='small'
          className={styles.button}
          onClick={handleSubmit}
          danger
        >
          Submit
        </Button>
      }
    </div>
  )
}

CheckboxGroup.propTypes = {
  options: PropTypes.array,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func
}

CheckboxGroup.defaultProps = {
  options: [],
  disabled: false
}

export default CheckboxGroup
