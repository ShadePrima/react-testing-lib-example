import { act, screen } from '@testing-library/react'
import { renderWithRouter } from '../../tests/helpers/renderWithRouter'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('NAVBAR TEST', () => {
  test('main link', async () => {
    renderWithRouter(<Navbar />)
    const mainLink = screen.getByTestId('main-link')
    act(() => {
      userEvent.click(mainLink)
    })
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
  test('about link', async () => {
    renderWithRouter(<Navbar />)
    const aboutLink = screen.getByTestId('about-link')
    act(() => {
      userEvent.click(aboutLink)
    })
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
  })
  test('users link', async () => {
    renderWithRouter(<Navbar />)
    const usersLink = screen.getByTestId('users-link')
    act(() => {
      userEvent.click(usersLink)
    })
    expect(screen.getByTestId('users-page')).toBeInTheDocument()
  })
})
