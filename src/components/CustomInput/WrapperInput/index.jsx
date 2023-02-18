import React from 'react'
import { FormError } from '../FormError'
import { useFormContext } from 'react-hook-form'

const formValidationMessage = (errors, errorKeys) => {
  const errorMsg = errorKeys.map((errorKey) => {
    return errors[errorKey] ? (
      <p key={errorKey}>{errors[errorKey].message}</p>
    ) : (
      ''
    )
  })
  return errorMsg
}

export function WrapperInput({ children, names }) {
  const { errors } = useFormContext()
  return (
    <>
      {children}
      {errors && formValidationMessage(errors, names)}
    </>
  )
}
