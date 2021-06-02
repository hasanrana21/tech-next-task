import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { PostsContext } from '../../../App';
import './EditPost.css';

const EditPost = () => {
    const {postEditId} = useParams();
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        setGlobalPosts(data);
    };

    const newEdit = globalPosts.filter(edit => edit.id === parseInt(postEditId));
    console.log(newEdit);
    return (
        <div className="add-post">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Post Title</label>
                <input name="title" placeholder="Title"  required {...register("title")}/>

                <label>Body</label>
                <textarea name="body" id="description" placeholder="Description" required cols="64" rows="10" {...register("body")}></textarea>

                <div>
                    <button type="submit" className="submit-button"> Submit </button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;