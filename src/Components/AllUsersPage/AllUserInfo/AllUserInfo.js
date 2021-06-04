import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AllUserInfoDetails from '../AllUserInfoDetails/AllUserInfoDetails';
import './AllUserInfo.css';

const AllUserInfo = () => {
    const {id} = useParams();
    const [allUserPosts, setAllUserPosts] = useState([]);
    const [usersResult, setUsersResult] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setAllUserPosts(data));

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result => setUsersResult(result));
    }, [])

    const userPostsDetails = allUserPosts.filter(allPost => allPost.userId === parseInt(id));
    console.log(userPostsDetails);

    const userInfoDetails = usersResult.filter(allUserInfo => allUserInfo.id === parseInt(id));
    console.log(userInfoDetails[0]);
    return (
        <div>
            <div className="user-info-card">
                <h3>{userInfoDetails[0]?.name} ({userInfoDetails[0]?.username})</h3>
                <h5>Company: {userInfoDetails[0]?.company?.name}</h5>
                <h6>Phone: {userInfoDetails[0]?.phone}</h6>
                <h6>Email: {userInfoDetails[0]?.email}</h6>
                <h6>Website: {userInfoDetails[0]?.website}</h6>
                <p>Address: {userInfoDetails[0]?.address?.street}, {userInfoDetails[0]?.address?.city}, {userInfoDetails[0]?.address?.zipcode}</p>
            </div>
            <div className="row container mx-auto">
                {
                    userPostsDetails.map((usersPosts, index) => <AllUserInfoDetails usersPosts={usersPosts} key={index}></AllUserInfoDetails>)
                }
            </div>
        </div>
    );
};

export default AllUserInfo;