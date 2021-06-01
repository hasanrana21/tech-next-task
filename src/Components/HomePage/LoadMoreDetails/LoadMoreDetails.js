import React from 'react';
import './LoadMoreDetails.css';

const LoadMoreDetails = (props) => {
    const { id, title, body } = props.more;
    return (
        <div className="col-md-4 post-card">
            <h6>User: {id}</h6>
            <h5 className="">{title}</h5>
            <p className="text-justify">{body}</p>
        </div>
    );
};

export default LoadMoreDetails;