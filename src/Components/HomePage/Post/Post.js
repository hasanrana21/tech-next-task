import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPosts(data.slice(0, 10))
        })
    }, [])
    return (
        <div className="row">
            {
                posts.map(post => <PostDetails post={post} key={post.id}></PostDetails>)
            }
            <Link to="/loadMore" className="text-center primary-button">
                <button style={{backgroundColor: 'red', border: 'none', padding: '5px 15px', borderRadius: '3px', color: 'white', fontWeight: '500'}}>Load More...</button>
            </Link>
        </div>
    );
};

export default Post;