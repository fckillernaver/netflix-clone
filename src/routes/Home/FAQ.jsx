import styles from "./faq.css"
import { faqs } from "../../assets/fakebase"
import { Link } from "react-router-dom"
import homeStyle from "./home.css"

const FAQ = () => {
  return (
    <div className={homeStyle.container.div}>
      <p className={homeStyle.container.p}>자주 묻는 질문</p>
      <ul className={homeStyle.container.ul}>
        {faqs.map((faq) => {
          return <FAQItem key={faq.q} {...faq} />
        })}
      </ul>
    </div>
  )
}

export default FAQ

const FAQItem = ({ q, a, path, pathText }) => {
  return (
    <li>
      <button className={styles.button}>
        <p className={styles.q}>{q}</p>
        <span className={styles.icon}>++</span>
      </button>
      <div className={styles.div}>
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
