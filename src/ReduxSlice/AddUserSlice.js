import { createSlice } from '@reduxjs/toolkit'

const AddUsersReducer = createSlice({
    name: 'AddUsers',
    initialState: {
        users: []
    },
    reducers: {
        AddUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        DeletteUser: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { AddUser, DeletteUser } = AddUsersReducer.actions;
export default AddUsersReducer.reducer;