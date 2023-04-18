import { act, render, screen } from '@testing-library/react'
import axios from 'axios'
import Users from './Users'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../router/AppRouter'
import { renderWithRouter } from '../tests/helpers/renderWithRouter'
import App from '../App'

jest.mock('axios')

describe('USERS TEST', () => {
  let response
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },

        {
          id: 2,
          name: 'Ervin Howell',
        },
      ],
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('render react link', async () => {
    axios.get.mockReturnValue(response)
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    )
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(2)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })

  test('redirect to userDetailPage', async () => {
    axios.get.mockReturnValue(response)
    render(renderWithRouter(<Users />))
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(2)
    act(() => {
      userEvent.click(users[1])
    })
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  })
})
