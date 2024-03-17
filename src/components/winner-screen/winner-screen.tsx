import { useAppDispatch, useAppSelector } from '@/app/store'
import { Button } from '@/components/common/button/button'
import { guesserActions } from '@/features/guesser/guesser-slice'
import { getAttemptsNum } from '@/utils/selectors'

import s from './winner-guesser.module.scss'

export const WinnerScreen = () => {
  const dispatch = useAppDispatch()
  const numAttempts = useAppSelector(getAttemptsNum)

  const handleClick = () => {
    dispatch(guesserActions.resetGame())
  }

  return (
    <div className={s.winBlock}>
      <div>Короче, я угадал Твое число! Использовано попыток: {numAttempts}</div>
      <Button btnText={'ПОПРОБОВАТЬ ЕЩЁ'} onBtnClick={handleClick} />
    </div>
  )
}
