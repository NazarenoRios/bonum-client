import { useState } from 'react'

export function useInput() {
  const [value, setValue] = useState('')
  function onChange(e: any) {
    setValue(e.target.value)
  }
  return { onChange, value }
}
