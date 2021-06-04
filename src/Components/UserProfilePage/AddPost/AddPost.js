import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { PostsContext } from '../../../App';
import './AddPost.css';

const AddPost = () => {
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log([data]);
        setGlobalPosts([data]);
    };
    return (
        <div className="add-post">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Post Title</label>
                <input name="title" placeholder="Title" required {...register("title")}/>

                <label>Description</label>
                <textarea name="description" id="description" placeholder="Description" required cols="64" rows="10" {...register("description")}></textarea>

                <div>
                    <Link to="/userPosts">
                        <button type="submit" className="submit-button"> Submit </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddPost;