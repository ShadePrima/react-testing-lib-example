import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

describe('Router app test', () => {
  test('Router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    act(() => {
      userEvent.click(aboutLink)
    })
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    fireEvent.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })

  test('page error', () => {
    render(
      <MemoryRouter initialEntries={['/fasdfafdas']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  })
})
