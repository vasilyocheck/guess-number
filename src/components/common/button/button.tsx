import s from './button.module.scss'

type ButtonProps = {
  btnText: string
  disabled?: boolean
  onBtnClick: () => void
}

export const Button = (props: ButtonProps) => {
  const { btnText, disabled, onBtnClick } = props

  return (
    <button className={s.btn} disabled={disabled || false} onClick={onBtnClick}>
      {btnText}
    </button>
  )
}
