import { useEffect, useState } from 'react'
import './App.css'

const inputStyle = {
  marginTop: '10px',
}

function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')

  const onClick = () => setToggle((prev) => !prev)

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 1000)
  }, [])

  return (
    <div className='App'>
      <div data-testId='value-elem'>{value}</div>
      {data && <div style={{ color: 'red' }}>data</div>}
      <h1>Hello world</h1>
      <button data-testid='toggle-btn' onClick={onClick}>
        Click me
      </button>
      <br />
      <input
        style={inputStyle}
        type='text'
        name='text'
        id='text'
        placeholder='input value'
        onChange={(e) => setValue(e.target.value)}
      />
      {toggle === true && <div data-testid='toggle-element'>toggle</div>}
    </div>
  )
}

export default App
