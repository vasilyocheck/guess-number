import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type GuesserState = {
  attemptNum: number
  currentNum: number
  isGameLaunched: boolean
  isGuessed: boolean
  rangeEnd: number
  rangeStart: number
}

export type Status = 'less' | 'more' | 'win'

const initialState: GuesserState = {
  attemptNum: 0,
  currentNum: 0,
  isGameLaunched: false,
  isGuessed: false,
  rangeEnd: 1000000,
  rangeStart: 1,
}

export const guesserSlice = createSlice({
  initialState,
  name: 'guesser',
  reducers: {
    guessNumber: (state, action: PayloadAction<{ status: Status }>) => {
      if (action.payload.status === 'less') {
        state.rangeEnd = state.currentNum
        state.attemptNum += 1
        state.currentNum -= Math.ceil((state.rangeEnd - state.rangeStart) / 2)
      }
      if (action.payload.status === 'more') {
        state.attemptNum += 1
        state.rangeStart = state.currentNum
        state.currentNum = Math.ceil((state.rangeEnd - state.currentNum) / 2) + state.currentNum
      }
      if (action.payload.status === 'win') {
        state.isGuessed = true
      }
    },
    resetGame: state => {
      state.attemptNum = 0
      state.currentNum = 0
      state.isGameLaunched = false
      state.isGuessed = false
      state.rangeEnd = 1000000
      state.rangeStart = 1
    },
    startGame: state => {
      state.isGameLaunched = true
      state.attemptNum += 1
      state.currentNum = Math.ceil((state.rangeEnd - state.rangeStart) / 2)
    },
  },
})

export const guesserActions = guesserSlice.actions
export const guesserReducer = guesserSlice.reducer
