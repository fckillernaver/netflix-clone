import { useRef } from "react"

const UseRef = () => {
  const inputRef = useRef()
  // document.querySelector() //getEelementById
  const onInput = () => {
    console.log(inputRef.current.value)
  }

  const onFocus = () => {
    alert("값을 입력하세요.")

    setTimeout(() => {
      inputRef.current?.focus()
    }, 1000)
  }

  const selectRef = useRef()
  const onSelect = () => {
    alert("옵션을 선택하세요")
    setTimeout(() => {
      selectRef.current?.showPicker()
    }, 500)
  }

  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={onInput}>Check Input</button>
      <button onClick={onFocus}>Focus Input</button>
      <div>
        <select name="" id="" ref={selectRef}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={onSelect}>show options</button>
      </div>
    </div>
  )
}

export default UseRef
