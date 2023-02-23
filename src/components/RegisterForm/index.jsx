import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormSchema } from './schemas/register-form-schema'
import { FormProvider, useForm } from 'react-hook-form'
import './styles.css'
import { Success } from './Success'
import { CustomInput } from '../CustomInput'
import { WrapperInput } from '../CustomInput/WrapperInput'
import { useFormValuesContext } from '../../context/FormContext'
export function RegisterForm() {
  const [{ successForm }, { setSuccessForm }] = useFormValuesContext()
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    const noErrors = isDirty && isValid
    if (noErrors) {
      reset((formValues) => ({
        ...formValues,
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
      }))
      setSuccessForm(true)
    }
  }

  return (
    <section className="register-form">
      {successForm ? (
        <Success />
      ) : (
        <FormProvider {...{ register, errors, getValues, setValue, reset }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              name="name"
              label="CARDHOLDER NAME"
              type="text"
              required={true}
              maxLength="40"
              placeholder="e.g. Jane Appleseed"
              witherrors={true}
            />
            <CustomInput
              name="number"
              label="CARD NUMBER"
              type="text"
              required={true}
              maxLength="19"
              placeholder="e.g. 1234 5678 9123 0000"
              witherrors={true}
            ></CustomInput>

            <div className="register-form-inline">
              <div className="register-form-date">
                <WrapperInput names={['month', 'year']}>
                  <CustomInput
                    name="month"
                    label="EXP. DATE (MM/YY)"
                    type="text"
                    required={true}
                    placeholder="MM"
                    maxLength="2"
                  ></CustomInput>
                  <CustomInput
                    name="year"
                    label=""
                    type="text"
                    required={true}
                    placeholder="YY"
                    maxLength="2"
                  ></CustomInput>
                </WrapperInput>
              </div>
              <div className="register-form-cvc">
                <CustomInput
                  name="cvc"
                  label="CVC"
                  type="text"
                  required={true}
                  placeholder="e.g. 123"
                  maxLength="3"
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
