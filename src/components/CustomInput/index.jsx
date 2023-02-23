import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useFormValuesContext } from '../../context/FormContext'

const formValidationMessage = (errors, errorKey) => {
  return errors[errorKey] ? <p>{errors[errorKey].message}</p> : ''
}
const formValidationClass = (errors, errorKey) => {
  return errors[errorKey] ? 'input-error' : 'input'
}
const formatNumber = (name, number) => {
  let formattedNumber = number
  if (name === 'number') {
    const trimNumber = number.replace(/\s/g, '')
    const arrEveryFour = trimNumber.match(/.{1,4}/g) || []
    formattedNumber = arrEveryFour.join(' ')
  }
  return formattedNumber
}

export function CustomInput({
  name = '',
  label = '',
  type = 'text',
  required = false,
  placeholder = '',
  maxLength,
  witherrors = false,
}) {
  const [_, actions] = useFormValuesContext()
  const { setFormData } = actions
  const { register, errors, getValues, setValue } = useFormContext()

  const onChange = (e) => {
    let valueInput = getValues(name)
    if (valueInput === ' ' && name === 'number') return

    valueInput = formatNumber(name, valueInput)

    setValue(name, valueInput, { shouldValidate: true })

    const updatedFormData = { ...getValues(), [name]: valueInput }
    setFormData(updatedFormData)
  }

  return (
    <>
      {label !== '' ? <label htmlFor={name}>{label}</label> : ''}
      <input
        className={formValidationClass(errors, name)}
        defaultValue={getValues(name)}
        type={type}
        aria-label={name}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        {...register(name, {
          onChange,
        })}
      ></input>
      {errors && witherrors && formValidationMessage(errors, name)}
    </>
  )
}
