import React from 'react';
import { Link } from 'react-router-dom';
import './UsersDetails.css';

const UsersDetails = (props) => {
    const { name, email, website, id } = props.users;
    return (
            <tbody>
                <tr>
                    <td>
                        <Link to={`/allUserInfo/${id}`}>
                            {name}
                        </Link>
                    </td>
                    <td>{email}</td>
                    <td>{website}</td>
                </tr>
            </tbody>
    );
};

export default UsersDetails;