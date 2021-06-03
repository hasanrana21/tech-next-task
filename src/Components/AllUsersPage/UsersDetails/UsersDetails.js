import React from 'react';
import { Link } from 'react-router-dom';
import './UsersDetails.css';

const UsersDetails = (props) => {
    const { name, email, website } = props.users;
    return (
            <tr>
                <td>
                    <Link to="/userPosts">
                        {name}
                    </Link>
                </td>
                <td>{email}</td>
                <td>{website}</td>
            </tr>
    );
};

export default UsersDetails;