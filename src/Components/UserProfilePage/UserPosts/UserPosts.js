import React, { useContext } from 'react';
import { PostsContext } from '../../../App';
import './UserPosts.css';
import { Link } from 'react-router-dom';

const UserPosts = () => {
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    console.log(globalPosts);

    const handleUpdate = (event) => {
        
    }
    return (
        <div className="row container mx-auto">
            {
                globalPosts.map(post => 
                    <div className="col-md-4 post-card" key={post.id}>
                        <h6 className="fw-bold text-center fs-5" style={{color: 'green'}}>User: {post.userId}</h6>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                        
                        <Link to={`/usersPostDetails/${post.id}`}>
                            <button className="details-btn" onClick={handleUpdate}>More Details</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default UserPosts;