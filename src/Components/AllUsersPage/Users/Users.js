import React, { useEffect, useState } from 'react';
import UsersDetails from '../UsersDetails/UsersDetails';
import './Users.css';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllUsers(data);
        })
    }, [])
    return (
            <div id="all-users-section">
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </tbody>
                    
                    {
                        allUsers.map((users, index) => <UsersDetails users={users} key={index}></UsersDetails>)
                    }
                </table>
            </div>
    );
};

export default Users;