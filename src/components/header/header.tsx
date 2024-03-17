import { useAppSelector } from '@/app/store'
import { makeNumReadable } from '@/utils/makeNumReadable'
import { getRangeEnd, getRangeStart } from '@/utils/selectors'

import s from './header.module.scss'

export const Header = () => {
  const start = makeNumReadable(useAppSelector(getRangeStart))
  const end = makeNumReadable(useAppSelector(getRangeEnd))

  return (
    <header className={s.header}>
      <div>Привет, кожаный!</div>
      <div>Загадай любое число</div>
      <div>
        от {start} до {end} и я отгадаю его менее чем за 21 попытку
      </div>
    </header>
  )
}
