import React, { useState } from 'react'
import { useFormContext } from '../../context/FormContext'
import { useForm } from 'react-hook-form'
import './styles.css'
import { Success } from './Success'
export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [success, setSuccess] = useState(false)
  const [state, actions] = useFormContext()
  const { formData } = state
  const { onChange } = actions

  const onSubmit = (data, e) => {
    e.preventDefault()
    const noErrors = Object.keys(errors).length === 0
    if (noErrors) setSuccess(true)
  }
  return (
    <section className="register-form">
      {success ? (
        <Success />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            className={errors?.name ? 'input-error' : 'input'}
            type="text"
            aria-label="name"
            maxLength="40"
            placeholder="e.g. Jane Appleseed"
            {...register('name', {
              required: true,
              pattern: /^[a-zA-Z\s]+$/,
              maxLength: 40,
              onChange,
            })}
          ></input>
          {errors.name && errors.name?.type === 'required' && (
            <p>Can't be blank</p>
          )}
          {errors.name && errors.name?.type === 'pattern' && (
            <p>Wrong format, letters only</p>
          )}
          {errors.name && errors.name?.type === 'maxLength' && (
            <p>Wrong, name too long</p>
          )}
          <label htmlFor="number">CARD NUMBER</label>
          <input
            className={errors?.number ? 'input-error' : 'input'}
            value={formData.number}
            type="text"
            aria-label="number"
            maxLength="19"
            placeholder="e.g. 1234 5678 9123 0000"
            {...register('number', {
              required: true,
              pattern: /^[\d\s]+$/,
              minLength: 19,
              onChange,
            })}
          ></input>
          {errors.number && errors.number?.type === 'required' && (
            <p>Can't be blank</p>
          )}
          {errors.number && errors.number?.type === 'pattern' && (
            <p>Wrong format, numbers only</p>
          )}
          {errors.number && errors.number?.type === 'minLength' && (
            <p>Wrong card number</p>
          )}
          <div className="register-form-inline">
            <div className="register-form-date">
              <label>EXP. DATE (MM/YY)</label>
              <input
                className={errors?.month ? 'input-error' : 'input'}
                type="text"
                aria-label="month"
                placeholder="MM"
                maxLength="2"
                {...register('month', {
                  required: true,
                  pattern: /^(0?[1-9]|1[012])$/,
                  minLength: 2,
                  onChange,
                })}
              ></input>
              <input
                className={errors?.year ? 'input-error' : 'input'}
                type="text"
                aria-label="year"
                placeholder="YY"
                maxLength="2"
                {...register('year', {
                  required: true,
                  pattern: /^[0-9]{2}$/,
                  minLength: 2,
                  onChange,
                })}
              ></input>
              {(errors.month?.type === 'required' ||
                errors.year?.type === 'required') && <p>Can't be blank</p>}
              {(errors.month?.type === 'pattern' ||
                errors.year?.type === 'pattern') && <p>Wrong format</p>}
              {(errors.month?.type === 'minLength' ||
                errors.year?.type === 'minLength') && <p>Wrong date</p>}
            </div>
            <div className="register-form-cvc">
              <label htmlFor="cvc">CVC</label>
              <input
                className={errors?.cvc ? 'input-error' : 'input'}
                type="text"
                aria-label="cvc"
                placeholder="e.g. 123"
                maxLength="3"
                {...register('cvc', {
                  required: true,
                  pattern: /^[0-9]{3}$/,
                  minLength: 3,
                  onChange,
                })}
              ></input>
              {errors.cvc && errors.cvc?.type === 'required' && (
                <p>Can't be blank</p>
              )}
              {errors.cvc && errors.cvc?.type === 'pattern' && (
                <p>Wrong format, numbers only</p>
              )}
              {errors.cvc && errors.cvc?.type === 'minLength' && (
                <p>Wrong cvc</p>
              )}
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      )}
    </section>
  )
}
