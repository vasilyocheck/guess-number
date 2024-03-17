import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { guesserReducer } from '@/features/guesser/guesser-slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    guesser: guesserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
