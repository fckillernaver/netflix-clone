import { useEffect, useState } from "react"

const UseEffect = () => {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)

  const onStart = () => {
    setStart(true)
  }
  const onStop = () => {
    setStart(false)
  }
  const onReset = () => {
    setStart(false)
    setTime(0)
  }

  useEffect(() => {
    console.log(start)
  }, [])

  useEffect(() => {
    console.log({ time })
  }, [time])

  useEffect(() => {
    if (start) {
      const count = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)

      return () => {
        clearInterval(count)
      }
    }
  }, [start])

  return (
    <div>
      <h1>uesEffect</h1>
      <p>
        <b>{time}초 지났습니다.</b>
      </p>
      <div>
        <button onClick={onStart}>시작</button>
        <button onClick={onStop}>중지</button>
        <button onClick={onReset}>초기화</button>
      </div>
    </div>
  )
}

export default UseEffect

const myFn = () => {}
