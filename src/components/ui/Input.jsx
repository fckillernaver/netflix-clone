import { useState, useEffect } from "react"
import inputStyles from "./input.css"

const Input = ({ id, placeholder, value, setValue, type }) => {
  //   const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    if (value.length > 0) {
      return setIsFocused(true)
    }
    setIsFocused(false)
  }

  useEffect(() => {
    console.log(value)
    if (value.length > 0) {
      setIsFocused(true)
    }
  }, [value])

  return (
    <div className={inputStyles.container}>
      <label htmlFor={id} className={inputStyles.label({ isFocused })}>
        {placeholder}
      </label>
      <input
        className={inputStyles.input}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type ?? "email"} //
        id={id}
      />
    </div>
  )
}

export default Input
