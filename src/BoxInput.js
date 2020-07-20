import {useState} from 'react'

export default function useBoxInput(initialState) {
    const [value, setValue] = useState(initialState)
    function handleChange(e) {
      setValue(e.target.checked)
    }
    return {
      value,
      onChange: handleChange
    }
  }