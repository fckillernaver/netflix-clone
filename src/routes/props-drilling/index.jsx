import { useState, useEffect } from "react"
import Item from "./Item"

// 리액트에서 받는 인자값을 props 프랍스 라고 부른다.
const PropsDrilling2 = () => {
  const [people, setPeople] = useState([])

  const [name, setName] = useState("")

  const onSubmit = () => {
    setPeople((prev) => [{ name, id: prev.length }, ...prev])
  }

  return (
    <div>
      <h1>props-drilling</h1>
      <p>{fn("윤", "덕현")}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
      >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button>추가</button>
      </form>

      {/* map할때 주의할 점: key 속성에 넣는 값으로 index ㄴㄴ 훨씬 더 정교하고 고유하고 반복되지 않을 값을 넣어야 함 타입은 무조건 문자열 */}
      {people.map((person, index) => {
        return <Item key={person.id} text={person.name} />
      })}
    </div>
  )
}

export default PropsDrilling2

// 원시타입 primitive 프리머티브
// string, number, null, undefined 문자열, 숫자

// 객체 타입 object 오브젝트 아브젝트 // ++ 배열 Array 어레이
const fn = (a, b) => {
  //   console.log(typeof "")
  //   console.log(typeof 2)
  //   console.log(typeof null)
  //   console.log(typeof undefined)

  //   console.log(
  //     typeof {
  //       name: "윤덕현",
  //     }
  //   )

  //   console.log(typeof ["a", "b"])

  return a + b
}

const { first, last } = {
  first: "덕현",
  last: "윤",
}

// const { first, last } = name

// console.log(name.last)
// console.log(name.first)

// console.log(first)
// console.log(last)
