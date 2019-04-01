import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PostForm from '../posts/post_form';


const DashBoard = () => {

        return(
            <div className="Dashboard-main">
                <div className="postForm">
                    <PostForm />
                </div>
                {/* <div className="Dashboard-Index">
                    {posts}
                </div> */}
            </div>
        )
}

export default DashBoard;