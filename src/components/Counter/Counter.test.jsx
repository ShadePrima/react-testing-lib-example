import { act, render, screen } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../tests/helpers/renderWithRouter'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'
import { renderWithRedux } from '../../tests/helpers/renderWithRedux'
import { renderTestApp } from '../../tests/helpers/renderTestApp'

describe('counter test', () => {
  test('test router', () => {
    renderTestApp(null, {
      route: '/',
      initialState: {
        counter: {
          value: 10,
        },
      },
    })
    const incrementBtn = screen.getByTestId('increment-btn')
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    act(() => {
      userEvent.click(incrementBtn)
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
})
