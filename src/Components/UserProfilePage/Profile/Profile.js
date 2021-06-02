import React from 'react';
import AddPost from '../AddPost/AddPost';
import UserPosts from '../UserPosts/UserPosts';
import './Profile.css';

const Profile = () => {
    return (
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3 dashboard-button" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">My Posts</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Post</button>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <UserPosts></UserPosts> </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <AddPost></AddPost> </div>
            </div>
        </div>

    );
};

export default Profile;