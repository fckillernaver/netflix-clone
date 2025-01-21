import { useNavigate, useLocation } from "react-router-dom"
import { HiLanguage } from "react-icons/hi2"
import { RiNetflixFill } from "react-icons/ri"
import OpenColor from "open-color"
import { useEffect } from "react"
import { user } from "../../assets/fakebase"
import { Button } from "../ui/Button"
import styles from "./header.css"

const Header = () => {
  const navi = useNavigate()

  // const location = useLocation()
  // const pathname = location.pathname 이 과정을 아래처럼 할 수 잇음

  const { pathname } = useLocation()

  const onL = () => {
    navi("/login")
  }

  const onT = () => {
    navi("/")
  }

  // 1. 확인용
  // 클릭하거나, 동작하지 않을 때에도 확인하고 싶을 때
  useEffect(() => {
    console.log(pathname)
  }, [pathname]) // [] dependency 디펜던시 의존성

  return (
    <header className={styles.header}>
      <button className={styles.title} onClick={onT}>
        <RiNetflixFill />
      </button>
      <ul className={styles.ul}>
        <li>
          <Button
            style={{
              border: "1px solid",
              fontSize: ".75rem",
            }}
          >
            <HiLanguage />
            언어
          </Button>
        </li>
        {/* 조건 && 연산자 ===  앞의 조건에 부합할 때 실행할 코드를 && 오른편에 적어줍니다. */}
        {/* 조건 ? : 연산자 === 앞의 조건에 부합때 실행할 코드는 ? 오른편에, 앞의 조건에 부합하지 않을 때 실행할 코드는 : 오른편에  */}
        {pathname !== "/login" && (
          <li>
            <Button
              style={{
                backgroundColor: OpenColor.red[7],
                fontSize: ".75rem",
              }}
              onClick={onL}
            >
              로그인
            </Button>
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header
