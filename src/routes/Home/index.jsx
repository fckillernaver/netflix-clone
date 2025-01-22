import { useTextInput } from "../../components/ui/TextInput"
import styles from "./home.css"
import { anotherReasons } from "../../assets/fakebase"
import AnotherReasonItem from "./AnotherReasonItem"
import More from "./More"
import FAQ from "./FAQ"
import Start from "./Start"
import ImageSlider from "./ImageSlider"

const Home = () => {
  const Text = useTextInput()

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(Text.ref.current.value)
  }

  return (
    <div className={styles.wrap}>
      <Start />
      <More />
      <ImageSlider />
      <div className={styles.container.div}>
        <p className={styles.container.p}>가입해야 하는 또 다른 이유</p>
        <ul className={styles.container.ul}>
          {
            // 함수를 사용한다 = 호출 call/fire => ()까지 적어줌
            anotherReasons.map((reason) => {
              return <AnotherReasonItem key={reason.title} {...reason} /> // {...객체}
            })
          }
        </ul>
      </div>
      <FAQ />
    </div>
  )
}

export default Home
