import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PostsContext } from '../../../App';
import './UsersPostDetails.css';

const UsersPostDetails = () => {
    const {postID} = useParams();
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    const [allComments, setAllComments] = useState([]);

    let userPost = globalPosts.find(post => post.id = postID);
    // console.log(userPost);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comments => {
            console.log(comments);
            setAllComments(comments);
        })
    }, [])
    let usersComments = allComments.filter(singleComment => singleComment?.postId === userPost?.userId);
    console.log(usersComments);//akan teke akon map krte hobe
    return (
        <div className="row single-post-section">
            <div className="col-md-4 single-post-details">
                <div className="d-flex justify-content-between">
                    <h6>Post id: {userPost?.id} </h6>
                    <h6>User id: {userPost.userId} </h6>
                </div>
                <h5>{userPost.title}</h5>
                <p>{userPost.body}</p>
            </div>
            <div className="post-comments">
                <h1>{usersComments?.email}</h1>
            </div>
        </div>
    );
};

export default UsersPostDetails;