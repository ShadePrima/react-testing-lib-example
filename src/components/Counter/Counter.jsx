import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue'
import { decrement, increment } from '../../store/reducers/counterReducer'

const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)
  console.log(value)

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1 data-testid='value-title'>{value}</h1>
      <button onClick={onIncrement} data-testid='increment-btn'>
        increment
      </button>
      <button onClick={onDecrement} data-testid='decrement-btn'>
        decrement
      </button>
    </div>
  )
}

export default Counter
