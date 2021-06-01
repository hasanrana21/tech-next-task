import React from 'react';
import './PostDetails.css';

const PostDetails = (props) => {
    const {id, title, body} = props.post;
    return (
        <div className="col-md-4 post-card">
            <h6>User: {id}</h6>
            <h5 className="">{title}</h5>
            <p className="text-justify">{body}</p>
        </div>
    );
};

export default PostDetails;