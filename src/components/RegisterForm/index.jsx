import React from 'react'
import { useFormContext } from '../../context/FormContext'
import { useForm } from 'react-hook-form'

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [, actions] = useFormContext()
  const { onChange } = actions

  const onSubmit = (data, e) => {
    e.preventDefault()
  }

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            aria-label="name"
            {...register('name', { required: true, onChange })}
          ></input>
          {errors.name && <p>Can't be blank</p>}

          <label htmlFor="number">CARD NUMBER</label>
          <input
            type="text"
            aria-label="number"
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

          <label>EXP. DATE (MM/YY)</label>
          <input
            type="text"
            aria-label="month"
            {...register('month', { required: true, onChange })}
          ></input>
          <input
            type="text"
            aria-label="year"
            {...register('year', { required: true, onChange })}
          ></input>
          {(errors.month || errors.year) && <p>Can't be blank</p>}
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            aria-label="cvc"
            {...register('cvc', { required: true, onChange })}
          ></input>
          {errors.cvc && <p>Can't be blank</p>}
          <button type="submit">Confirm</button>
        </fieldset>
      </form>
    </section>
  )
}
