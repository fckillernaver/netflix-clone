import { useRef, useCallback } from "react"

export const TextInput = ({ inputRef, placeholder, id, divCn, inputCn }) => {
  return (
    <div className={divCn}>
      {/* <label htmlFor={id}>{placeholder}</label> */}
      <input type="text" id={id} ref={inputRef} placeholder={placeholder} className={inputCn} />
    </div>
  )
}

// custom Hook 리액트의 훅을 나만의 스타일로 만들어서 사용한다.
export const useTextInput = () => {
  const ref = useRef()
  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [ref])

  const Component = useCallback(
    ({ placeholder, id, divCn, inputCn }) => {
      return <TextInput id={id} inputRef={ref} placeholder={placeholder} divCn={divCn} inputCn={inputCn} />
    },
    [ref]
  )

  return {
    ref,
    focus,
    Component,
  }
}
