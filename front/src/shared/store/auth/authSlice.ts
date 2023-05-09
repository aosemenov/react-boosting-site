import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IError } from '../types';


export interface IAuthState {
  isAuthorized: boolean,
  isAuthorizing: boolean,
  error: IError | undefined,
  accessToken: string | undefined
}

const initialState: IAuthState = {
  isAuthorized: false,
  isAuthorizing: false,
  error: undefined,
  accessToken: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStarted: (state) => {
      state.isAuthorizing = true
      state.error = undefined
    },

    authSuccess: (state, { payload }: PayloadAction<string>) => {
      state.isAuthorizing = false
      state.isAuthorized = true
      state.accessToken = payload
    },

    unauth: (state) => {
      state.isAuthorized = false
      state.isAuthorizing = false
      state.error = undefined
      state.accessToken = undefined
    }
  },
});

export const actions = authSlice.actions

export const reducer = authSlice.reducer
