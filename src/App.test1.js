import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('test app', () => {
  test('renders learn react link', () => {
    render(<App />)
    const helloWorldElement = screen.getByText(/hello world/i)
    const button = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElement).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toMatchSnapshot()
  })

  test('renders learn react element', async () => {
    render(<App />)
    // const helloWorldElement = screen.queryByText(/hele world 2/i)
    // expect(helloWorldElement).toBeNull()

    screen.debug()
    const helloWorldElement = await screen.findByText(/data/i)
    expect(helloWorldElement).toBeInTheDocument()
    expect(helloWorldElement).toHaveStyle({ color: 'red' })
    screen.debug()
  })

  test('event button', () => {
    render(<App />)
    const button = screen.getByTestId('toggle-btn')
    const toggleDiv = screen.queryByTestId('toggle-element')
    expect(toggleDiv).toBe(null)
    fireEvent.click(button)
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.queryByTestId('toggle-element')).toBeNull()
  })

  test('event input', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    //artificalt even
    // fireEvent.input(input, {
    //   target: {
    //     value: '123123',
    //   },
    // })
    //user event
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
  })
})
