import React, { useRef } from 'react'
import front from '/bg-card-front.png'
import back from '/bg-card-back.png'
import './styles.css'
import { useFormContext } from '../../context/FormContext'
import { CardLogo } from '../Icon'

export function Cards() {
  const [state] = useFormContext()
  const { formData } = state
  const initData = useRef({
    name: 'JANE APPLESEED',
    number: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  })
  return (
    <section className="card">
      <picture>
        <source srcset="/bg-main-desktop.png" media="(min-width: 376px)" />
        <img src="/bg-main-mobile.png" alt="background cards" />
      </picture>
      <div className="card__front">
        <CardLogo className="card__front-logo" />
        <div className="card__front-text">
          <p>{formData.number || initData.current.number}</p>
          <p>{formData.name || initData.current.name}</p>
          <p>
            {formData.month || initData.current.month}/
            {formData.year || initData.current.year}
          </p>
        </div>
        <div className="card__front-img">
          <img alt="front card" src={front} width="300px"></img>
        </div>
      </div>
      <div className="card__back">
        <div className="card__back-text">
          <p>{formData.cvc}</p>
        </div>
        <div className="card__back-img" alt="back card">
          <img alt="back card" width="288px" src={back}></img>
        </div>
      </div>
    </section>
  )
}
