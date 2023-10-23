import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        //make sure user is confirmed to delete
        fetch(`http://localhost:5001/user/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('delete successfully');
                    // remove the user from the UI
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })

    }

    return (
        <div className=" overflow-x-auto flex justify-center items-center w-5/6 md:w-4/5 mt-4 mx-auto">
            <table className=" table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CreateAt </th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadedUsers.map(user => <tr key={user._id}>

                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th>{user.createAt}</th>
                            <td>
                                <button onClick={() => handleDelete(user._id)} className="btn">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;