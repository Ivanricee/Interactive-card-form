import React from 'react'
import { Complete } from '../../Icon'
import './styles.css'
import { useFormValuesContext } from '../../../context/FormContext'

export function Success() {
  const [_, { setSuccessForm, setFormData }] = useFormValuesContext()

  const handleClick = () => {
    setSuccessForm(false)
    setFormData({ name: '', number: '', month: '', year: '', cvc: '' })
  }
  return (
    <section>
      <Complete className="register-form--success" />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button type="button" onClick={handleClick}>
        Confirm
      </button>
    </section>
  )
}
