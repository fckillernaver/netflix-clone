// import { } from 'react'
import { useEffect, useState, useMemo , useCallback} from "react"

const UseState = () => {
  // const initialString = useMemo(() => '', [])
  const [string, setString] = useState("")
  // const string =''

  const onString = () => {
    setString((prev) => {
      // return prev + '덕현'
      return `${prev} 덕현`
    })
  }

  const [number, setNumber] = useState(2)

  const onMinus = () => {
    setNumber((prev) => prev - 1)
  }

  const onReset = () => {
    setNumber(0)
  }

  const onPlus = () => {
    // setNumber(prev => prev + 1)
    setNumber((prev) => {
      return prev + 1
    })
  }

  const initialObj = useMemo(() => {
    return { first: "덕현", last: "윤" }
  }, [])

  const [obj, setObj] = useState(initialObj)
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")

  const firstMessage = useMemo(() => {
    if (first.length === 0) {
      return "이름을 입력하세요."
    }
    if (first === obj.first) {
      return "변경사항이 없습니다."
    }
    return null
  }, [first, obj.first])

  // const 함수이름 = useCallback(() => {}, [])
  const onFirst = useCallback(
    () => {
      // setObj({ last: "윤", first })
      // setObj((prev) => {
      //   return { ...prev, first }
      // })
      if (firstMessage) {
        return alert(firstMessage)
      }
  
      setObj((prev) => ({ ...prev, first }))
    }, [firstMessage, first]
  )
  const onLast = () => {
    if (last.length === 0) {
      return alert("성을 입력하세요.")
    }
    if (last === obj.last) {
      return alert("변경사항이 없습니다.")
    }
    setObj((prev) => {
      return { ...prev, last }
    })
  }

  const onName = () => {
    if (first.length === 0) {
      return alert("이름을 입력하세요.")
    }
    if (first === obj.first) {
      return alert("변경사항이 없습니다.")
    }

    if (last.length === 0) {
      return alert("성을 입력하세요.")
    }
    if (last === obj.last) {
      return alert("변경사항이 없습니다.")
    }

    setObj({ last, first, middle: "세바스찬" })
  }

  const [light, setLight] = useState(false)
  const [light2, setLight2] = useState(false)
  const [light3, setLight3] = useState(false)

  const onLight1 = () => {
    setLight((prev) => !prev)
  }
  const onLight2 = () => {
    setLight2((prev) => !prev)
  }
  const onLight3 = () => {
    setLight3((prev) => !prev)
  }

  const onMaster = () => {
    if (!light && !light2 && !light3) {
      setLight(true)
      setLight2(true)
      return setLight3(true)
    }
    setLight(false)
    setLight2(false)
    setLight3(false)
  }

  const [stringArray, setStringArray] = useState(["a", "b", "c"])
  const onStringArray = () => {
    const newString = string
    console.log(newString)

    if (newString.length === 0) {
      return alert("값을 입력해주세요.")
    }

    const found = stringArray.find((item) => item === newString)
    if (found) {
      return alert("중복된 값입니다.")
    }

    setStringArray((prev) => {
      return [...prev, newString]
      // return [newString, ...prev]
    })
  }

  const [objArray, setObjArray] = useState([
    { first: "빈", last: "원" },
    { first: "빈", last: "현" },
    { first: "동건", last: "장" },
  ])

  const onObjArray = () => {
    const newFirst = first
    const newLast = last

    if (newFirst.length === 0) {
      return alert("이름을 입력해주세요")
    }
    if (newLast.length === 0) {
      return alert("성을 입력해주세요")
    }

    // 문자열 !== 문자열 , ===, !==
    //숫자 ===, !==, >, <, >=, <=
    //객체 와 객체 비교는 다른 비교할 수 잇는 다른 고유값
    const found = objArray.find((person) => {
      const fullName = `${person.last} ${person.first}`
      const newFullName = `${newLast} ${newFirst}`
      if (fullName === newFullName) {
        return person
      }
    })

    if (found) {
      return alert("중복된 이름입니다.")
    }

    const newName = { first: newFirst, last: newLast }

    setObjArray((prev) => [newName, ...prev])
  }

  useEffect(() => {
    console.log(obj)
    // console.log(obj.last)
    // console.log(obj["last"])
  }, [obj])

  useEffect(() => {
    console.log(string)
  }, [string])

  return (
    <div>
      <p>
        <b>string: {string}</b>
      </p>
      <input
        type="text"
        value={string}
        onChange={(e) => {
          setString(e.target.value) // () 직접 초기값과 같은 타입
        }}
      />
      <button onClick={onString}>FIRE</button>

      <div>
        <p>
          <b>number: {number}</b>
        </p>
        <div>
          <button onClick={onMinus}>---</button>
          <button onClick={onReset}>{number}</button>
          <button onClick={onPlus}>+++</button>
        </div>
      </div>

      <div>
        <p>
          <b>
            my full name: {obj.last} {obj.first}
          </b>
        </p>

        <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
        <button onClick={onFirst}>이름 개명</button>

        <input type="text" value={last} onChange={(e) => setLast(e.target.value)} />
        <button onClick={onLast}>성 개명</button>

        <button onClick={onName}>전체 이름 개명</button>
      </div>

      <div>
        <div>
          <p>light is {light ? "on" : "off"}</p>
          <button onClick={onLight1}>room1 switch</button>
        </div>
        <div>
          <p>light is {light2 ? "on" : "off"}</p>
          <button onClick={onLight2}>room2 switch</button>
        </div>
        <div>
          <p>light is {light3 ? "on" : "off"}</p>
          <button onClick={onLight3}>room3 switch</button>
        </div>

        <div>
          <button onClick={onMaster}>master switch</button>
        </div>
      </div>

      <div>
        <input
          type="text"
          value={string}
          onChange={(e) => {
            setString(e.target.value) // () 직접 초기값과 같은 타입
          }}
        />
        <button onClick={onStringArray}>Add String to StringArray</button>
        <ul>
          {stringArray.map((item, index) => {
            return <li key={`${index}${item}`}>{item}</li>
          })}
        </ul>
      </div>

      <div>
        <input type="text" value={last} onChange={(e) => setLast(e.target.value)} />
        <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />

        <button onClick={onObjArray}>추가</button>
        <ul>
          {objArray.map((item, index) => {
            return (
              <li key={`${item}${index}`}>
                {item.last} {item.first}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default UseState
