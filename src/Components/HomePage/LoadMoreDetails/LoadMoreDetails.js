import React from 'react';
import './LoadMoreDetails.css';

const LoadMoreDetails = (props) => {
    const { id, title, body } = props.more;
    return (
        <div className="col-md-4 post-card">
            <h6 className="fw-bold">ID: {id}</h6>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default LoadMoreDetails;