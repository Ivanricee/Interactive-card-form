import React from 'react'
import { useFormContext } from 'react-hook-form'

const formValidationMessage = (errors, errorKey) => {
  return errors[errorKey] ? <p>{errors[errorKey].message}</p> : ''
}
const formValidationClass = (errors, errorKey) => {
  return errors[errorKey] ? 'input-error' : 'input'
}
export function CustomInput({
  name = '',
  label = '',
  type = 'text',
  required = false,
  placeholder = '',
  maxLength,
  onChange,
  value = '',
  witherrors = false,
}) {
  const { register, errors } = useFormContext()

  return (
    <>
      {label !== '' ? <label htmlFor={name}>{label}</label> : ''}
      <input
        className={formValidationClass(errors, name)}
        value={value}
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
