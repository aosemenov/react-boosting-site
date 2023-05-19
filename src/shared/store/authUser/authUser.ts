import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IError, IUser } from '../types'


export interface IAuthState {
  isAuthorized: boolean,
  isAuthorizing: boolean,
  error: IError | undefined,
  userProfile: IUser | null,
}

const initialState: IAuthState = {
  isAuthorized: false,
  isAuthorizing: false,
  error: undefined,
  userProfile: null,
};

export const AuthUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    authStarted: (state) => {
      state.isAuthorizing = true
      state.error = undefined
    },

    authSuccess: (state, { payload }: PayloadAction<IUser>) => {
      state.isAuthorizing = false
      state.isAuthorized = true
      state.userProfile = payload
    },

    registerSuccess: (state, { payload }: PayloadAction<IUser>) => {
      state.isAuthorizing = false
      state.isAuthorized = true
      state.userProfile = payload
    },

    authFailed: (state, { payload }: PayloadAction<IError>) => {
      state.isAuthorizing = false
      state.isAuthorized = false
      state.error = payload
    },

    resetAuth: (state) => {
      state.isAuthorizing = false
      state.isAuthorized = false
      state.error = undefined
    }
  },
});

export const actions = AuthUserSlice.actions

export const reducer = AuthUserSlice.reducer
