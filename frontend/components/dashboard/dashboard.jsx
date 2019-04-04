import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import PostForm from '../posts/post_form';
import PostCreateContainer from '../posts/post_create_container';
import ImageCreateContainer from '../posts/image_create_container';
import QuoteCreateContainer from '../posts/quote_create_container';
import LinkCreateContainer from '../posts/link_create_container';
import AudioCreateContainer from '../posts/audio_create_container';
import VideoCreateContainer from '../posts/video_create_container';


const DashBoard = () => {

    return (
        <Switch>
            <Route path="/new/text" component={PostCreateContainer}/>
            <Route path="/new/photo" component={ImageCreateContainer}/>
            <Route path="/new/quote" component={QuoteCreateContainer}/>
            <Route path="/new/link" component={LinkCreateContainer}/>
            <Route path="/new/audio" component={AudioCreateContainer}/>
            <Route path="/new/video" component={VideoCreateContainer}/>


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