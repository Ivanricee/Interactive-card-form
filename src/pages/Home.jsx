import React from 'react'
import { FormContextProvider } from '../context/FormContext'
import { RegisterForm } from '../components/RegisterForm'
import { Cards } from '../components/Cards'
import './styles.css'
export function Home() {
  return (
    <FormContextProvider>
      <main>
        <Cards />
        <RegisterForm />
      </main>
    </FormContextProvider>
  )
}
