import React from 'react'
import { Complete } from '../../Icon'
import './styles.css'
export function Success() {
  return (
    <section>
      <Complete className="register-form--success" />
      <h1>THANK YOU!</h1>
    </section>
  )
}
