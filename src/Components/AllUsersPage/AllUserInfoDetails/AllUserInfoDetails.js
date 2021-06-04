import React from 'react';

const AllUserInfoDetails = (props) => {
    // console.log(props.usersPosts);
    const { body, title, userId } = props.usersPosts; // akan teke start krte hobe just bosai dewa.
    return (
        <div className="col-md-4 post-card">
            <h6 className="fw-bold">ID: {userId}</h6>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default AllUserInfoDetails;