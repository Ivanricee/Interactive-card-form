import * as yup from 'yup'
export const RegisterFormSchema = yup.object({
  name: yup
    .string()
    .required("Can't be blank")
    .max(40, 'Wrong, name too long')
    .matches(/^[a-zA-Z\s]+$/, 'Wrong format, numbers only'),
  number: yup
    .string()
    .required("Can't be blank")
    .min(19, 'Wrong card number')
    .matches(/^[\d\s]+$/, 'Wrong format, numbers only'),
  month: yup
    .string()
    .required("Month can't be blank")
    .min(2, 'Wrong month length')
    .matches(/^(0?[1-9]|1[012])$/, 'Wrong month format'),
  year: yup
    .string()
    .required("Year can't be blank")
    .min(2, 'Wrong year length')
    .matches(/^[0-9]{2}$/, 'Wrong year format'),
  cvc: yup
    .string()
    .required("Can't be blank")
    .min(3, 'Wrong cvc')
    .matches(/^[0-9]{3}$/, 'Wrong format, numbers only'),
})
