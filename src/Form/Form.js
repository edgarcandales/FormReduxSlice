import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { AddUser } from '../ReduxSlice/AddUserSlice';

const Form = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const User = useSelector(state => state.user.users)
    const AddThisUser = (data, e) => {
        dispatch(AddUser(data));
        reset()
    }

    return (
        <form onSubmit={handleSubmit(AddThisUser)}>
            <input placeholder={"Name"} type="text" {...register("name", { required: true })} />
            <input placeholder={"Last Name"} type="text" {...register("lastName", { required: true })} />
            <button type="submit">Add User</button>
        </form>
    )
}

export default Form
