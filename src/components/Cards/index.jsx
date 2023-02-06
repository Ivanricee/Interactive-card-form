import React from 'react'
import front from '/bg-card-front.png'
import back from '/bg-card-back.png'

import { useFormContext } from '../../context/FormContext'
export function Cards() {
  const [state] = useFormContext()
  const { formData } = state

  return (
    <section>
      <div>
        <div>
          <p>{formData.number}</p>
          <p>{formData.name}</p>
          <p>{formData.month}</p>
          <p>{formData.year}</p>
        </div>
        <img alt="front card" src={front}></img>
      </div>
      <div>
        <div>
          <div>
            <p>{formData.cvc}</p>
          </div>
        </div>
        <img alt="back card" src={back}></img>
      </div>
    </section>
  )
}
