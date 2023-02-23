import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Home } from '../../pages/Home'
import {
  registerFormError,
  registerFormMock,
  registerFormMessageError,
} from './mocks/Register.mock'
import userEvent from '@testing-library/user-event'

describe('Card form', () => {
  // clear or restore mocks before or after each test run
  //cleanup usado para limpiar renders de cada prueba
  afterEach(cleanup)
  afterEach(vi.clearAllMocks)
  beforeEach(() => {
    render(<Home />)
  })
  const formValues = () => {
    const name = screen.getByRole('textbox', { name: /name/i })
    const number = screen.getByRole('textbox', { name: /number/i })
    const month = screen.getByRole('textbox', { name: /month/i })
    const year = screen.getByRole('textbox', { name: /year/i })
    const cvc = screen.getByRole('textbox', { name: /cvc/i })
    const submit = screen.getByRole('button', { name: /Confirm/i })
    return { name, number, month, year, cvc, submit }
  }

  it('Should have 5 inputs and an disabled button.', () => {
    formValues()
  })
  it('Should submit the form if values are valid', async () => {
    const { submit, name, number, month, year, cvc } = formValues()
    await userEvent.type(name, registerFormMock.name)
    await userEvent.type(number, registerFormMock.number)
    await userEvent.type(month, registerFormMock.month)
    await userEvent.type(year, registerFormMock.year)
    await userEvent.type(cvc, registerFormMock.cvc)
    await fireEvent.submit(submit)
  })
  it('should display an error message below each form input', async () => {
    const { number, submit } = formValues()
    await userEvent.type(number, registerFormError.number)
    await fireEvent.submit(submit)
    await waitFor(() => {
      const empty = screen.getAllByText(`${registerFormMessageError.empty}`)
      let month = screen.getAllByText(`${registerFormMessageError.month}`)
      let year = screen.getAllByText(`${registerFormMessageError.year}`)

      expect(empty).toHaveLength(2)
      expect(month).toHaveLength(1)
      expect(year).toHaveLength(1)

      screen.getByText(`${registerFormMessageError.number}`)
    })
  })
})
