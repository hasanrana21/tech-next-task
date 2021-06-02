import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PostsContext } from '../../../App';
import './UsersPostDetails.css';

const UsersPostDetails = () => {
    const {postID} = useParams();
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    const [allComments, setAllComments] = useState([]);

    let userPost = globalPosts.find(post => post.id === parseInt(postID));
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
    // console.log(usersComments);

    const handleDelete = async (id) => {
        const deletedPost = globalPosts.filter((postDelete) => {
            return postDelete.id !== id;
        })
        setGlobalPosts(deletedPost);
    }

    const handleUpdate = async (updateID) => {
        const updatedPost = globalPosts.filter((postUpdate) => {
            return postUpdate.id === updateID;
        })
    }
    return (
        <div className="single-post-section">
            <div className="single-post-details">
                <div className="d-flex justify-content-between">
                    <h6 style={{color: 'green'}}>Post id: {userPost?.id} </h6>
                    <h6 style={{color: 'crimson'}}>User id: {userPost?.userId} </h6>
                </div>
                <h3>{userPost?.title}</h3>
                <h5>{userPost?.body}</h5>
                <div className="action-button d-flex justify-content-between">
                    <Link to={`/editPost/${userPost?.id}`}>
                        <button className="update-btn" onClick={() => handleUpdate(userPost?.id)}>Update</button>
                    </Link>
                    <button className="delete-btn" onClick={() => handleDelete(userPost?.id)}>Delete</button>
                </div>
            </div>
            <div className="post-comments">
                <h4 style={{marginLeft: '-30px', marginTop: '25px'}}>Comments</h4>
                {
                    usersComments.map((comment, index) => <div key={index} className="comment-card">
                        <div className="d-flex">
                            <p className="commenter-image"></p> 
                            <p className="commenter-name">{comment.name}</p>
                        </div>
                        <small>{comment.body}</small>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPostDetails;