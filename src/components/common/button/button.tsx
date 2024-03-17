import s from './button.module.scss'

type ButtonProps = {
  btnText: string
  onBtnClick: () => void
}

export const Button = (props: ButtonProps) => {
  const { btnText, onBtnClick } = props

  return (
    <button className={s.btn} onClick={onBtnClick}>
      {btnText}
    </button>
  )
}
