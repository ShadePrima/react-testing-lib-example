import axios from 'axios'
import { render, screen } from '@testing-library/react'
import Users from './Users'

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

  test('render react link', async () => {
    axios.get.mockReturnValue(response)
    render(<Users />)
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(2)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })
})
