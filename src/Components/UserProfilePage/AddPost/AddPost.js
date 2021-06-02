import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPost.css';

const AddPost = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="add-post">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Post Title</label>
                <input name="title" placeholder="Title" required {...register("title")}/>

                <label>Description</label>
                <textarea name="description" id="description" placeholder="Description" required cols="64" rows="10" {...register("description")}></textarea>

                <div>
                    <button type="submit" className="submit-button"> Submit </button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;