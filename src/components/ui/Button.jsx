// Props Drilling
// 다른 곳에서 아래의 컴포넌트를 불러 쓸 때 전달해주는 값

import styles from "./button.css"

// size = 'sm' |'lg'|'xl'
const Button = ({ onClick, type, children, style, className }) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      style={style}
      className={className ? `${className} ${styles}` : styles}
    >
      {/* 조건 ?? 연산자 <==> 조건 && 연산자 */}
      {/* 앞의 조건이 부합하지 않을 때 실행하는 코드를 ?? 오른편에 작성 */}
      {children ?? "Button"}
    </button>
  )
}

// ;<button type="button">취소</button>

// 핸드폰 버튼 => 2,3가지
// 1. 클릭했을 때 투명도 변함
// 2. 클릭시 색깔이 조금 진하게 변함
// 3. 아무 변화 없음

export { Button }
