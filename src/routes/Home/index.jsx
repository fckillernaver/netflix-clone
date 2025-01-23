import styles from "./home.css"
import { anotherReasons } from "../../assets/fakebase"
import AnotherReasonItem from "./AnotherReasonItem"
import More from "./More"
import FAQ from "./FAQ"
import Start from "./Start"
import ImageSlider from "./ImageSlider"
import { useMyContext } from "../../contextApi/ContextProvider"
import UserHome from "./userHome"

const Home = () => {
  const { user } = useMyContext()

  if (user) {
    return <UserHome />
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
// const getMovies = useCallback(async () => {
//   const token =
//     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWRiNmZmMjZlODUxN2ZkNDZjMmVlNjc5NDRmYTA2OCIsIm5iZiI6MTY5MTE2NjEyNC44MTcsInN1YiI6IjY0Y2QyNWFjZjY3ODdhMDBlNTE1MTFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eMaRVtXoybrYdojImZxTNmvGLaNoLzzNIbT8ryCNe0o"
//   const api_key = "25db6ff26e8517fd46c2ee67944fa068"

//   const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
//   console.log(res)
//   const data = await res.json()

//   console.log(data)
// }, [])
