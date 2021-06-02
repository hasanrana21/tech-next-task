import React from 'react';
import { useParams } from 'react-router';
import './UsersPostDetails.css';

const UsersPostDetails = () => {
    const {postID} = useParams();
    return (
        <div>
            <h4>This is Users Post Details</h4>
        </div>
    );
};

export default UsersPostDetails;