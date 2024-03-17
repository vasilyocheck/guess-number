import { useAppDispatch, useAppSelector } from '@/app/store'
import { Button } from '@/components/common/button/button'
import { Guesser } from '@/components/guesser/guesser'
import { Header } from '@/components/header/header'
import { WinnerScreen } from '@/components/winner-screen'
import { guesserActions } from '@/features/guesser/guesser-slice'

import s from './app.module.scss'

export function App() {
  const dispatch = useAppDispatch()
  const isGameLaunched = useAppSelector(state => state.guesser.isGameLaunched)
  const isGuessed = useAppSelector(state => state.guesser.isGuessed)

  const launchGame = () => {
    dispatch(guesserActions.startGame())
  }

  return (
    <div className={s.appWrapper}>
      <Header />
      <div className={s.gameScreen}>
        {!isGameLaunched && !isGuessed && <Button btnText={'СТАРТ'} onBtnClick={launchGame} />}
        {isGameLaunched && !isGuessed && <Guesser />}
        {isGuessed && <WinnerScreen />}
      </div>
    </div>
  )
}
