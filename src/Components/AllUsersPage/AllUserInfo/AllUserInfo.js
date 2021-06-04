import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AllUserInfoDetails from '../AllUserInfoDetails/AllUserInfoDetails';

const AllUserInfo = () => {
    const {id} = useParams();
    const [allUserPosts, setAllUserPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setAllUserPosts(data));
    }, [])

    const userInfoDetails = allUserPosts.filter(allPost => allPost.userId === parseInt(id));
    console.log(userInfoDetails);
    return (
        <div>
            {
                userInfoDetails.map((usersPosts, index) => <AllUserInfoDetails usersPosts={usersPosts} key={index}></AllUserInfoDetails>)
            }
        </div>
    );
};

export default AllUserInfo;