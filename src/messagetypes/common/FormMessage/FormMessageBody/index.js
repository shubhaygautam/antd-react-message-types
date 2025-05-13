import React, { lazy, Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import { DatePicker, Radio, Button, Rate, Select, Input } from 'antd'

import { isEmail } from '../../../../data/config/utils'

const Buttons = lazy(() => import('../../../../components/Buttons'))
const Header = lazy(() => import('../../../../components/Header'))

const { RangePicker } = DatePicker

const FormMessageBody = ({
  payload,
  message,
  handleMsgBtnClick,
  btnHidden,
  btnDisabled,
  defaultBtnDisplayCount,
  disabled,
  showless,
  showmore,
  onSubmit
}) => {
  const [selectedValues, setSelectedValues] = useState(
    payload.selectedValues || {}
  )

  const [defaultDisabled, setDefaultDisabled] = useState(
    payload.defaultDisabled
  )
  const [detectedErrors, setDetectedErrors] = useState({})

  const deleteDetectedErrors = key => {
    if (detectedErrors[key]) {
      const { [key]: errorKey, ...restDetectedErrors } = detectedErrors
      setDetectedErrors(restDetectedErrors)
    }
  }

  const validateSelectedField = item => {
    let hasError = false
    if (item.type === 'input' && item.props.type === 'email') {
      if (!isEmail(selectedValues[item.props.name])) {
        hasError = true
        setDetectedErrors(prevState => ({
          ...prevState,
          [item.props.name]: 'EmailId is not valid'
        }))
      }
    }
    return hasError
  }

  const handleFormChange = (changedValue, errorKey) => {
    deleteDetectedErrors(errorKey)
    setSelectedValues(prevState => ({
      ...prevState,
      ...changedValue
    }))
    if (payload.autoSubmit) handleSubmit()
  }

  const handleSubmit = () => {
    let list = []
    let hasError = Object.keys(detectedErrors).length > 0
    payload.formData.forEach(item => {
      if (selectedValues[item.props.name] !== undefined) {
        const obj = { label: item.displayLabel }
        hasError = hasError || validateSelectedField(item)
        if (item.type === 'datePicker') {
          obj.value = selectedValues[item.props.name].format(
            item.props.format || 'DD-MMM-YYYY'
          )
        } else if (item.type === 'dateRangePicker') {
          obj.value = selectedValues[item.props.name][0]
            .format(item.props.format || 'DD-MMM-YYYY')
            .concat(
              ' : ',
              selectedValues[item.props.name][1].format(
                item.props.format || 'DD-MMM-YYYY'
              )
            )
        } else if (item.type === 'radioGroup' || item.type === 'select') {
          const option = item.props.options.find(
            opt => opt.value === selectedValues[item.props.name]
          )
          obj.value = option.label
        } else {
          obj.value = selectedValues[item.props.name]
        }
        list.push(obj)
      } else if (item.props.required && !detectedErrors[item.props.name]) {
        hasError = true
        setDetectedErrors(prevState => ({
          ...prevState,
          [item.props.name]: 'This is required field'
        }))
      }
    })

    if (!hasError) {
      const data = {
        list,
        selectedData: selectedValues,
        relayData: payload.relayData
      }
      // console.log('data', data, detectedErrors)
      onSubmit(data)
    }
  }

  const handleEdit = () => setDefaultDisabled(false)

  return (
    <div className='ori-word-break ori-mt-FormMessageContainer'>
      <Suspense fallback={null}>
        {(payload.title || payload.subtitle) && (
          <Header title={payload.title} subtitle={payload.subtitle} />
        )}
      </Suspense>
      {payload.formData && payload.formData.length > 0 && (
        <React.Fragment>
          {payload.formData.map((item, index) => {
            switch (item.type) {
              case 'datePicker':
                return (
                  <div className='ori-b-pad-5' key={index}>
                    {item.title && (
                      <p>
                        {item.props.required && <span>*</span>}
                        {item.title}
                      </p>
                    )}
                    <DatePicker
                      size='small'
                      className='ori-full-width'
                      style={{ maxWidth: '150px' }}
                      disabledDate={c =>
                        c &&
                        item.disabledTimestamp &&
                        c.valueOf() < item.disabledTimestamp
                      }
                      {...item.props}
                      disabled={disabled || defaultDisabled}
                      value={selectedValues[item.props.name]}
                      onChange={selectedDate =>
                        handleFormChange(
                          { [item.props.name]: selectedDate || undefined },
                          item.props.name
                        )
                      }
                      inputReadOnly
                    />
                    {detectedErrors[item.props.name] && (
                      <p className='ori-font-xs ori-font-danger'>
                        {detectedErrors[item.props.name]}
                      </p>
                    )}
                  </div>
                )
              case 'dateRangePicker':
                return (
                  <div className='ori-b-pad-5' key={index}>
                    {item.title && (
                      <p>
                        {item.props.required && <span>*</span>}
                        {item.title}
                      </p>
                    )}
                    <RangePicker
                      size='small'
                      className='ori-full-width'
                      {...item.props}
                      disabled={disabled || defaultDisabled}
                      disabledDate={c => {
                        if (item.disabledDateRange) {
                          if (
                            item.disabledDateRange[0] &&
                            item.disabledDateRange[1]
                          ) {
                            return !(
                              c &&
                              c < item.disabledDateRange[1] &&
                              c > item.disabledDateRange[0]
                            )
                          }
                          if (item.disabledDateRange[0]) {
                            return c && c < item.disabledDateRange[0]
                          }
                          if (item.disabledDateRange[1]) {
                            return c && c > item.disabledDateRange[1]
                          }
                        }
                        return false
                      }}
                      value={selectedValues[item.props.name]}
                      onChange={selectedDate =>
                        handleFormChange(
                          { [item.props.name]: selectedDate || undefined },
                          item.props.name
                        )
                      }
                      inputReadOnly
                    />
                    {detectedErrors[item.props.name] && (
                      <p className='ori-font-xs ori-font-danger'>
                        {detectedErrors[item.props.name]}
                      </p>
                    )}
                  </div>
                )
              case 'radioGroup':
                return (
                  <div className='ori-b-pad-5' key={index}>
                    {item.title && (
                      <p>
                        {item.props.required && <span>*</span>}
                        {item.title}
                      </p>
                    )}
                    <Radio.Group
                      size='small'
                      className={`ori-full-width ${
                        item.vertical ? 'ori-flex-column' : ''
                      }`}
                      {...item.props}
                      disabled={disabled || defaultDisabled}
                      value={selectedValues[item.props.name]}
                      onChange={e =>
                        handleFormChange(
                          {
                            [item.props.name]: e.target.value
                          },
                          item.props.name
                        )
                      }
                    />
                    {detectedErrors[item.props.name] && (
                      <p className='ori-font-xs ori-font-danger'>
                        {detectedErrors[item.props.name]}
                      </p>
                    )}
                  </div>
                )
              case 'select':
                return (
                  <div className='ori-b-pad-5' key={index}>
                    {item.title && (
                      <p>
                        {item.props.required && <span>*</span>}
                        {item.title}
                      </p>
                    )}
                    <Select
                      size='small'
                      className='ori-full-width'
                      {...item.props}
                      getPopupContainer={triggerNode => triggerNode.parentNode}
                      disabled={disabled || defaultDisabled}
                      value={selectedValues[item.props.name]}
                      onChange={value =>
                        handleFormChange(
                          { [item.props.name]: value },
                          item.props.name
                        )
                      }
                    />
                    {detectedErrors[item.props.name] && (
                      <p className='ori-font-xs ori-font-danger'>
                        {detectedErrors[item.props.name]}
                      </p>
                    )}
                  </div>
                )
              case 'input':
                return (
                  <div className='ori-b-pad-5' key={index}>
                    {item.title && (
                      <p>
                        {item.props.required && <span>*</span>}
                        {item.title}
                      </p>
                    )}
                    <Input
                      size='small'
                      className='ori-full-width'
                      {...item.props}
                      disabled={disabled || defaultDisabled}
                      value={selectedValues[item.props.name]}
                      onChange={e =>
                        handleFormChange(
                          {
                            [item.props.name]: e.target.value
                          },
                          item.props.name
                        )
                      }
                    />
                    {detectedErrors[item.props.name] && (
                      <p className='ori-font-xs ori-font-danger'>
                        {detectedErrors[item.props.name]}
                      </p>
                    )}
                  </div>
                )
              case 'rating':
                return (
                  <div className='ori-b-pad-5' key={index}>
                    {item.title && (
                      <p>
                        {item.props.required && <span>*</span>}
                        {item.title}
                      </p>
                    )}
                    <Rate
                      {...item.props}
                      disabled={disabled || defaultDisabled}
                      value={selectedValues[item.props.name]}
                      onChange={value =>
                        handleFormChange(
                          { [item.props.name]: value },
                          item.props.name
                        )
                      }
                    />
                    {detectedErrors[item.props.name] && (
                      <p className='ori-font-xs ori-font-danger'>
                        {detectedErrors[item.props.name]}
                      </p>
                    )}
                  </div>
                )
              default:
                return null
            }
          })}
          {!payload.autoSubmit && (
            <Button
              size='small'
              className='ori-btn-submit'
              disabled={disabled}
              onClick={handleSubmit}
            >
              {payload.submitBtnText ? payload.submitBtnText : 'Submit'}
            </Button>
          )}
          {payload.defaultDisabled && (
            <Button
              size='small'
              className='ori-btn-edit'
              disabled={disabled}
              onClick={handleEdit}
            >
              {payload.editBtnText ? payload.editBtnText : 'Edit'}
            </Button>
          )}
        </React.Fragment>
      )}
      <Suspense fallback={null}>
        {!btnHidden && payload.buttons && payload.buttons.length > 0 && (
          <Buttons
            buttons={payload.buttons}
            message={message}
            disabled={btnDisabled || disabled}
            displayCount={
              payload.btnDisplayCount
                ? payload.btnDisplayCount
                : defaultBtnDisplayCount
            }
            showmore={showmore}
            showless={showless}
            onClick={handleMsgBtnClick}
          />
        )}
      </Suspense>
      {!btnHidden && payload.buttons && payload.buttons.length > 0 && (
        <Buttons
          buttons={payload.buttons}
          display_count={
            payload.btnDisplayCount
              ? payload.btnDisplayCount
              : defaultBtnDisplayCount
          }
          message={message}
          btn_disabled={btnDisabled}
          handleMsgBtnClick={handleMsgBtnClick}
          showmore={showmore}
          showless={showless}
        />
      )}
    </div>
  )
}
// }

FormMessageBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  defaultBtnDisplayCount: PropTypes.number,
  onSubmit: PropTypes.func,
  showmore: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showless: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

FormMessageBody.defaultProps = {
  btnDisabled: false,
  btnHidden: false,
  disabled: false,
  defaultBtnDisplayCount: 4,
  showless: 'Show less',
  showmore: 'Show more'
}

export default FormMessageBody
