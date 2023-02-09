import { vi, describe, it, afterEach, beforeEach } from 'vitest'
import { Home } from '../../pages/Home'
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { registerFormMock } from './mocks/Register.mock'
describe('Cards', () => {
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
  const typeInputForm = async () => {
    const { submit, name, number, month, year, cvc } = formValues()
    await userEvent.type(name, registerFormMock.name)
    await userEvent.type(number, registerFormMock.number)
    await userEvent.type(month, registerFormMock.month)
    await userEvent.type(year, registerFormMock.year)
    await userEvent.type(cvc, registerFormMock.cvc)
    await fireEvent.submit(submit)
  }
  it('Should display 2 img cards', () => {
    screen.getAllByRole('img', { src: '/bg-card-front.png' })
    screen.getAllByRole('img', { src: '/bg-card-back.png' })
  })
  it('Should display form values in cards', async () => {
    await typeInputForm()
    await waitFor(() => {
      screen.getByText(`${registerFormMock.name}`)
      screen.getByText(`${registerFormMock.number}`)
      screen.getByText(`${registerFormMock.month}/${registerFormMock.year}`)
      screen.getByText(`${registerFormMock.cvc}`)
    })
  })
})
