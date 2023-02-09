import React from 'react'
import { useFormContext } from '../../context/FormContext'
import { useForm } from 'react-hook-form'
import './styles.css'
export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [state, actions] = useFormContext()
  const { formData } = state
  const { onChange } = actions

  const onSubmit = (data, e) => {
    e.preventDefault()
  }

  return (
    <section className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          type="text"
          aria-label="name"
          placeholder="e.g. Jane Appleseed"
          {...register('name', { required: true, onChange })}
        ></input>
        {errors.name && <p>Can't be blank</p>}

        <label htmlFor="number">CARD NUMBER</label>
        <input
          value={formData.number}
          type="text"
          aria-label="number"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register('number', {
            required: true,
            pattern: /^\d+$/,
            onChange,
          })}
        ></input>
        {errors.number && errors.number?.type === 'required' && (
          <p>Can't be blank</p>
        )}
        {errors.number && errors.number?.type === 'pattern' && (
          <p>Wrong format, numbers only</p>
        )}
        <div className="register-form-inline">
          <div className="register-form-date">
            <label>EXP. DATE (MM/YY)</label>
            <input
              type="text"
              aria-label="month"
              placeholder="MM"
              {...register('month', { required: true, onChange })}
            ></input>
            <input
              type="text"
              aria-label="year"
              placeholder="YY"
              {...register('year', { required: true, onChange })}
            ></input>
            {(errors.month || errors.year) && <p>Can't be blank</p>}
          </div>
          <div className="register-form-cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              aria-label="cvc"
              placeholder="e.g. 123"
              {...register('cvc', { required: true, onChange })}
            ></input>
          </div>
        </div>
        {errors.cvc && <p>Can't be blank</p>}
        <button type="submit">Confirm</button>
      </form>
    </section>
  )
}
