import { useAppDispatch, useAppSelector } from '@/app/store'
import { Button } from '@/components/common/button/button'
import { Status, guesserActions } from '@/features/guesser/guesser-slice'
import { makeNumReadable } from '@/utils/makeNumReadable'
import { getAttemptsNum, getCurrentNum } from '@/utils/selectors'

import s from './guesser.module.scss'

export const Guesser = () => {
  const dispatch = useAppDispatch()
  const currentNum = useAppSelector(getCurrentNum)
  const attemptNum = useAppSelector(getAttemptsNum)
  const numToCheck = makeNumReadable(currentNum)

  const handleBtnClick = (status: Status) => {
    dispatch(guesserActions.guessNumber({ status }))
  }

  return (
    <div className={s.guesser}>
      <div>Попытка №{attemptNum}</div>
      <div>
        Это число <span className={s.number}>{numToCheck}</span>?
      </div>
      <div className={s.buttons}>
        <Button btnText={'НЕТ, ЧИСЛО МЕНЬШЕ'} onBtnClick={() => handleBtnClick('less')} />
        <Button btnText={'ДА, УГАДАЛ'} onBtnClick={() => handleBtnClick('win')} />
        <Button btnText={'НЕТ, ЧИСЛО БОЛЬШЕ'} onBtnClick={() => handleBtnClick('more')} />
      </div>
    </div>
  )
}
