import React, { useContext } from 'react';
import { PostsContext } from '../../../App';
import './UserPosts.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserPosts = () => {
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    // console.log(globalPosts);

    const handleDelete = async (id) => {
        const deletedPost = globalPosts.filter((postDelete) => {
            return postDelete.id !== id;
        })
        setGlobalPosts(deletedPost);
    }

    const handleUpdate = async (updateID) => {
        // const updatedPost = globalPosts.filter((postUpdate) => {
        //     return postUpdate.id === updateID;
        // })

        fetch(`https://jsonplaceholder.typicode.com/posts/${updateID}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div className="row container mx-auto">
            {
                globalPosts.map(post => 
                    <div className="col-md-4 post-card" key={post.id}>

                    <div className=" d-flex align-items-center justify-content-between">
                        <div>
                            <h6 className="text-left">{post.id}</h6>
                        </div>
                        <div className="action-button">
                            <Link to={`/editPost/${post.id}`}>
                                <button className="update-btn" onClick={() => handleUpdate(post.id)}> <FontAwesomeIcon icon={faEdit}/> </button>
                            </Link>
                            <button className="delete-btn" onClick={() => handleDelete(post.id)}> <FontAwesomeIcon icon={faTrash}/> </button>
                        </div>
                    </div>

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