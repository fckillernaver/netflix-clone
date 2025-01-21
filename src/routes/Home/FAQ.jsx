import { useState, useEffect } from "react"
import styles from "./faq.css"
import { faqs } from "../../assets/fakebase"
import { Link } from "react-router-dom"
import homeStyle from "./home.css"

const FAQ = () => {
  const initialState = Array.from({ length: faqs.length }, () => {
    return false
  })

  const [booleans, setBooleans] = useState(initialState)

  return (
    <div className={homeStyle.container.div}>
      <p className={homeStyle.container.p}>자주 묻는 질문</p>
      <ul className={homeStyle.container.ul}>
        {faqs.map((faq, index) => {
          return (
            <FAQItem
              key={faq.q}
              {...faq}
              state={booleans[index]}
              onClick={() => {
                setBooleans((prev) => {
                  let copy = [...prev]
                  const foundIndex = copy.findIndex((item) => {
                    if (item === true) {
                      return item
                    }
                  })

                  if (foundIndex >= 0 && foundIndex !== index) {
                    copy[foundIndex] = false
                  }

                  copy[index] = !copy[index]
                  return copy
                })
              }}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default FAQ

const FAQItem = ({ q, a, path, pathText, state, onClick }) => {
  return (
    <li>
      <button className={styles.button} onClick={onClick}>
        <p className={styles.q}>{q}</p>
        <span className={styles.icon}>++</span>
      </button>

      <div className={styles.div({ state })}>
        <p className={styles.p}>{a}</p>
        {path && pathText && (
          <Link to={path} className={styles.link}>
            {pathText}
          </Link>
        )}
      </div>
    </li>
  )
}
