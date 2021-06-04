import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PostsContext } from '../../../App';
import './EditPost.css';

const EditPost = () => {
    const {postEditId} = useParams();
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${postEditId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    const newEdit = globalPosts.filter(edit => edit.id === parseInt(postEditId));
        console.log(newEdit[0]);
        
    const updatedPost = (e) => {
        console.log(e.target.value)
    }

    
    return (
        <div className="add-post">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Post Title</label>
                <input name="title" placeholder="Title" value={newEdit[0].title} onChange={updatedPost} required {...register("title")}/>

                <label>Body</label>
                <textarea name="body" id="description" value={newEdit[0].body} onChange={updatedPost} placeholder="Description" required cols="64" rows="10" {...register("body")}></textarea>

                <div>
                    {/* <Link to="/userPosts"> */}
                        <button type="submit" className="submit-button"> Submit </button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    );
};

export default EditPost;