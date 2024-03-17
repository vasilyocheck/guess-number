import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div>Привет, кожаный!</div>
      <div>Загадай любое число</div>
      <div>от 1 до 1 000 000 и я отгадаю его менее чем за 21 попытку</div>
    </header>
  )
}
