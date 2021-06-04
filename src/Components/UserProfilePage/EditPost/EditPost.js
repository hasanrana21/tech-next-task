import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PostsContext } from '../../../App';
import './EditPost.css';

const EditPost = () => {
    const {postEditId} = useParams();
    const [globalPosts, setGlobalPosts] = useContext(PostsContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        const newEdit = globalPosts.filter(edit => edit.id === parseInt(postEditId));
        console.log(newEdit[0]);
        const editStore = data.newEdit[0];
        
        setGlobalPosts();
            
            
    };

    
    return (
        <div className="add-post">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Post Title</label>
                <input name="title" placeholder="Title"  required {...register("title")}/>

                <label>Body</label>
                <textarea name="body" id="description" placeholder="Description" required cols="64" rows="10" {...register("body")}></textarea>

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