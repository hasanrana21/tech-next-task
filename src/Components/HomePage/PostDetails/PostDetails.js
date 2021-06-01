import React from 'react';
import './PostDetails.css';

const PostDetails = (props) => {
    const {id, title, body} = props.post;
    return (
        <div className="col-md-4 post-card">
            <h6 className="fw-bold">ID: {id}</h6>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;