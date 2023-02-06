import { createContext, useContext, useState } from 'react'

export const FormContext = createContext(null)
export function FormContextProvider({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  })

  const onChange = (e) => {
    const valueInput = e.target.value
    const nameInput = e.target.name
    const updatedFormData = { ...formData, [nameInput]: valueInput }
    setFormData(updatedFormData)
  }

  const state = {
    formData,
  }
  const actions = {
    onChange,
  }
  return (
    <FormContext.Provider value={{ state, actions }}>
      {children}
    </FormContext.Provider>
  )
}
export function useFormContext() {
  const { state, actions } = useContext(FormContext)
  return [state, actions]
}
export default FormContext
