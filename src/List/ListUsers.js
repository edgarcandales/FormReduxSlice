import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DeletteUser } from '../ReduxSlice/AddUserSlice';

const ListUsers = () => {
    const User = useSelector(state => state.user.users)
    const dispatch = useDispatch();



    const DeleteUser = (i) => {
        const newUser = User.filter((user, index) => index !== i)
        dispatch(DeletteUser(newUser))
    }

    //const EditUser = (i) => {
    //    console.log(i)
    //}

    return (
        <div>
            {User.map((user, index) => (
                <div> {index + 1} {user.name} {user.lastName}
                    <button onClick={() => DeleteUser(index)} >Delete</button>
                    {/*<button onClick={() => EditUser(index)} >Edit</button>*/}
                </div>
            ))}
        </div>
    )
}

export default ListUsers
