import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { reducer as authUserStore } from '@shared/store/authUser'
import { reducer as auth } from '@shared/store/auth'

export const store = configureStore({
  reducer: {
    auth,
    authUserStore,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>