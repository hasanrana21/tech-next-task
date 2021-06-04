import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UsersDetails from '../UsersDetails/UsersDetails';
import './Users.css';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loadData, setLoadData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllUsers(data.slice(0, 3));
            setLoadData(data);
        })
    }, [])
    return (
            <div id="all-users-section">
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </tbody>
                    
                    {
                        allUsers.map((users, index) => <UsersDetails users={users} key={index}></UsersDetails>)
                    }
                </table>
                
                <Link to="/users">
                    <button>Next</button>
                </Link>
            </div>
    );
};

export default Users;