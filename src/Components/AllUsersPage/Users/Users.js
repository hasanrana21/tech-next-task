import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UsersDetails from '../UsersDetails/UsersDetails';
import './Users.css';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllUsers(data);
            // setLoadData(data.slice(3, 8));
        })
    }, [])
    // const pageLoad2 = loadData.map(page2 => page2);
    // console.log(pageLoad2)
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
                
                {/* <div className="container my-5">
                    <ul className="pagination justify-content-center">
                        <li className="page-item mx-2"> <a className="page-link" href="/">1</a> </li>
                        <li className="page-item mx-2"> <a className="page-link" href={pageLoad2}>2</a> </li>
                        <li className="page-item mx-2"> <a className="page-link" href="/">3</a> </li>
                    </ul>
                </div> */}
            </div>
    );
};

export default Users;