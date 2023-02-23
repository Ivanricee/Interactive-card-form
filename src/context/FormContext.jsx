import { createContext, useContext, useState } from 'react'

export const FormContext = createContext(null)
export function FormContextProvider({ children }) {
  const [successForm, setSuccessForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  })

  const state = {
    formData,
    successForm,
  }
  const actions = {
    setFormData,
    setSuccessForm,
  }
  return (
    <FormContext.Provider value={{ state, actions }}>
      {children}
    </FormContext.Provider>
  )
}
export function useFormValuesContext() {
  const { state, actions } = useContext(FormContext)
  return [state, actions]
}
export default FormContext
