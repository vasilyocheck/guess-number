import { RootState } from '@/app/store'

export const getIsGameLaunched = (state: RootState) => state.guesser.isGameLaunched
export const getAttemptsNum = (state: RootState) => state.guesser.attemptNum
export const getIsGuessed = (state: RootState) => state.guesser.isGuessed

export const getCurrentNum = (state: RootState) => state.guesser.currentNum

export const getRangeStart = (state: RootState) => state.guesser.rangeStart

export const getRangeEnd = (state: RootState) => state.guesser.rangeEnd
