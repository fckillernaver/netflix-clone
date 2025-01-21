import { useState, useEffect, useMemo } from "react"
import styles from "./imageSlider.css"
import { imgs } from "../../assets/fakebase"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"

const ImageSlider = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const height = useMemo(() => {
    return (width / 16) * 9 // 16:9
  }, [width])

  const [currentIndex, setCurrentIndex] = useState(0)

  const onPrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        // 배열의 최대 index값을 return 해줘야 함
        //배열.length - 1
        return imgs.length - 1
      }
      return prev - 1
    })
  }

  const onNext = () => {
    setCurrentIndex((prev) => {
      if (prev === imgs.length - 1) {
        return 0
      }

      return prev + 1
    })
  }

  useEffect(() => {
    console.log({ currentIndex })
  }, [currentIndex])

  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth)
    }
    getWidth()

    window.addEventListener("resize", getWidth)

    return () => {
      window.removeEventListener("resize", getWidth)
    }
  }, [])

  return (
    <div
      style={{
        border: "1px solid",
        padding: 100,
      }}
    >
      <h1>Image Slider</h1>
      <Slider dots infinite speed={500} slidesToScroll={3} slidesToShow={3}>
        <div
          style={{
            padding: 100,
            border: "1px solid",
          }}
        >
          1
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </Slider>
      {/* <div className={styles.isContainer}>
        <div className={styles.isWrap} style={{ width, transform: `translateX(-${currentIndex * width}px)` }}>
          
          {imgs.map((img, index) => {
            return (
              <img
                key={img.title}
                src={imgs[index].imgUrl}
                alt=""
                width={width}
                height={height}
                className={styles.isImg}
                style={{
                  width, // width: width  변수의이름은 값의 이름이 되고 변수의 값은 그 값의 값이 된다.
                  height,
                }}
              />
            )
          })}
        </div>
        <button onClick={onPrev} className={styles.isPrev}>
          prev
        </button>
        <button onClick={onNext} className={styles.isNext}>
          next
        </button>
      </div> */}
    </div>
  )
}

export default ImageSlider
