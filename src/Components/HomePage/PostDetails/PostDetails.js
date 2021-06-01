import React from 'react';
import './PostDetails.css';

const PostDetails = (props) => {
    const {id, title, body} = props.post;
    return (
        <div className="col-md-4 post-card">
            <h6 className="text-center">{title}</h6>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;