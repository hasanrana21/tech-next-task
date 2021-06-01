import React, { useContext } from 'react';
import { PostsContext } from '../../../App';
import './UserPosts.css';

const UserPosts = () => {
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    console.log(globalPosts);
    return (
        <div className="row container mx-auto">
            {
                globalPosts.map(post => 
                    <div className="col-md-4 post-card">
                        <h6 className="fw-bold text-center fs-5" style={{color: 'green'}}>User: {post.userId}</h6>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                        <div className="action-button">
                            <button className="update-btn">Update</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UserPosts;