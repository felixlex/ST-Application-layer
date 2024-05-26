import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { UserType } from '../../types'
import { RootState } from '../store'

const initialState: UserType = {
  name: '',
}

const dataSlice = createSlice({
  name: 'user',
  initialState: { Data: initialState },
  reducers: {
    setData(state, { payload }) {
      state.Data = payload
    },
  },
})

export const userData = () => useSelector((state: RootState) => state.userInfo.Data)

export const { setData: setUserDataAction } = dataSlice.actions

export default dataSlice.reducer
