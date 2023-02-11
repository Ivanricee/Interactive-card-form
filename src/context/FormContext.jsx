import { createContext, useContext, useState } from 'react'

const formatNumber = (name, number) => {
  let formattedNumber = number
  if (name === 'number') {
    const trimNumber = number.replace(/\s/g, '')
    const arrEveryFour = trimNumber.match(/.{1,4}/g) || []
    formattedNumber = arrEveryFour.join(' ')
  }
  return formattedNumber
}

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
    let valueInput = e.target.value
    const nameInput = e.target.name
    if (e.nativeEvent.data === ' ' && nameInput === 'number') return

    valueInput = formatNumber(nameInput, valueInput)

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
