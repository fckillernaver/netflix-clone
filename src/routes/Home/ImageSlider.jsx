// ctrl a , rafce
import Slider from "react-slick"
import { useRef, useCallback } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { imgs } from "../../assets/fakebase"
import styles from "./imageSlider.css"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

const ImageSlider = () => {
  const ref = useRef(null)
  const Prev = useCallback(() => {
    const onClick = () => {
      ref.current?.slickPrev()
    }

    return (
      <button onClick={onClick} className={styles.prev}>
        <IoChevronBack />
      </button>
    )
  }, [ref])

  const Next = useCallback(() => {
    const onClick = () => {
      ref.current?.slickNext()
    }

    return (
      <button onClick={onClick} className={styles.next}>
        <IoChevronForward />
      </button>
    )
  }, [ref])

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <Slider
          // autoplay // boolean 타입의 속성 전달 => false 일때만 {} 안에 적어줌
          autoplaySpeed={2000}
          slidesToShow={3}
          slidesToScroll={2}
          className={styles.slider}
          nextArrow={<Next />}
          prevArrow={<Prev />}
          ref={ref}
        >
          {imgs.map((img, index) => {
            return <ImgItem key={img.title} {...img} />
          })}
        </Slider>
      </div>
    </div>
  )
}

// export {ImageSlider}
export default ImageSlider

const ImgItem = ({ imgUrl, title }) => {
  return (
    <div className={styles.item.container}>
      <p className={styles.item.title}>{title}</p>
      <img src={imgUrl} alt={title} width={100} height={100} className={styles.item.img} />
    </div>
  )
}
