import React from 'react'
import { useFormContext } from 'react-hook-form'

const formValidationMessage = (errors, errorKeys) => {
  const errorMsg = errorKeys.map((errorKey) => {
    return (
      <span key={errorKey}>
        {errors[errorKey] ? errors[errorKey].message : ''}
      </span>
    )
  })
  return errorMsg
}

export function WrapperInput({ children, names = [] }) {
  const { errors } = useFormContext()
  return (
    <>
      {children}
      <p>{errors && formValidationMessage(errors, names)}</p>
    </>
  )
}
