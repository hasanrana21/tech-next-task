import React from 'react';
import { Link } from 'react-router-dom';
import './UsersDetails.css';

const UsersDetails = (props) => {
    const { name, email, website, id } = props.users;
    return (
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>
                        <Link to={`/allUserInfo/${id}`}>
                            {name}
                        </Link>
                    </td>
                    <td>
                        <Link to={`/allUserInfo/${id}`}>
                            {email}
                        </Link></td>
                    <td>
                        <Link to={`/allUserInfo/${id}`}>
                            {website}
                        </Link></td>
                </tr>
            </tbody>
    );
};

export default UsersDetails;