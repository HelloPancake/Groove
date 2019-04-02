import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import PostForm from '../posts/post_form';
import PostCreateContainer from '../posts/post_create_container';


const DashBoard = () => {

    return (
        <Switch>
            <Route path="/new/text" component={PostCreateContainer}/>
            <Route path="/" render={() => {
                return (
                    <div className="Dashboard-main">
                        <div className="postForm">
                            <PostForm />
                        </div>
                        {/* <div className="Dashboard-Index">
                    {posts}
                </div> */}
                    </div>
                )
            }}/>

        </Switch>
    )
        
}

export default DashBoard;