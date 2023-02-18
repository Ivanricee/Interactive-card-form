import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormSchema } from './schemas/register-form-schema'
import { useFormContext } from '../../context/FormContext'
import { FormProvider, useForm } from 'react-hook-form'
import './styles.css'
import { Success } from './Success'
import { CustomInput } from '../CustomInput'
import { WrapperInput } from '../CustomInput/WrapperInput'
export function RegisterForm() {
  const [success, setSuccess] = useState(false)
  const [state, actions] = useFormContext()
  const { formData } = state
  const { onChange } = actions
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid, reset },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
      month: '',
      year: '',
      cvc: '',
    },
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const nameWatch = watch('name')
  const numberWatch = watch('number')
  const month = watch('month')
  const year = watch('year')
  const cvc = watch('cvc')

  const onSubmit = (data, e) => {
    e.preventDefault()
    const noErrors = isDirty && isValid
    if (noErrors) setSuccess(true)
  }
  return (
    <section className="register-form">
      {success ? (
        <Success />
      ) : (
        <FormProvider {...{ register, errors }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              name="name"
              value={formData.name}
              label="CARDHOLDER NAME"
              type="text"
              required={true}
              maxLength="40"
              placeholder="e.g. Jane Appleseed"
              onChange={onChange}
              witherrors={true}
            />
            <CustomInput
              name="number"
              value={formData.number}
              label="CARD NUMBER"
              type="text"
              required={true}
              maxLength="19"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={onChange}
              witherrors={true}
            ></CustomInput>

            <div className="register-form-inline">
              <div className="register-form-date">
                <WrapperInput names={['month', 'year']}>
                  <CustomInput
                    name="month"
                    value={formData.month}
                    label="EXP. DATE (MM/YY)"
                    type="text"
                    required={true}
                    placeholder="MM"
                    maxLength="2"
                    onChange={onChange}
                  ></CustomInput>
                  <CustomInput
                    name="year"
                    value={formData.year}
                    label=""
                    type="text"
                    required={true}
                    placeholder="YY"
                    maxLength="2"
                    onChange={onChange}
                  ></CustomInput>
                </WrapperInput>
              </div>
              <div className="register-form-cvc">
                <CustomInput
                  name="cvc"
                  value={formData.cvc}
                  label="CVC"
                  type="text"
                  required={true}
                  placeholder="e.g. 123"
                  maxLength="3"
                  onChange={onChange}
                  witherrors={true}
                ></CustomInput>
              </div>
            </div>
            <button type="submit">Confirm</button>
          </form>
        </FormProvider>
      )}
    </section>
  )
}
