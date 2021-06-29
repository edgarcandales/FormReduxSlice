import { configureStore } from '@reduxjs/toolkit';
import UsersSliceReducer from './AddUserSlice';
export default configureStore({
    reducer: {
        user: UsersSliceReducer
    }
})