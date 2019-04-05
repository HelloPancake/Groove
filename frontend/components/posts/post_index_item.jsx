import React from 'react';

const PostIndexItem = (props) => {
    let post;

    if (props.post.post_type == "quote"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <div className="QuoteFeed">"{props.post.title}"</div>  
                <div className="QuoteSourceFeed">-{props.post.body}</div>  
            </div>
            )}
    else if (props.post.post_type == "image"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <img className="ImagePost" src={props.post.media}/>
                <div>{props.post.body}</div>  
            </div>
        )}
    else if (props.post.post_type == "post"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <div className="indexTitle">{props.post.title}</div>
                <div className="indexBody">{props.post.body}</div>
            </div>
        )}
    else if (props.post.post_type == "link"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <a href={`https://${props.post.title}`} className="actualLink"rel="external">{props.post.title}</a>
            </div>
        )}
    else if (props.post.post_type == "audio"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <audio controls className="indexAudio">
                    <source src={props.post.media} />
                </audio>
                <div className="indexBody">{props.post.body}</div>
            </div>
        )}
    else if (props.post.post_type == "video"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <video controls loop className="indexVideo"  >
                    <source src={props.post.media} />
                </video>
            </div>
        )}
    else (
        post = null
    )
    
        // <div className="PostIndexItem">
        //     if(props.post.type == "quote"){
        //         <div>{props.post.body}</div>  
        //     };

        //     <img src={props.post.photo} alt=""/>
        //     {/* <button onClick={props.deletePost(props.post.id)}> Delete Post </button> */}
        //     {/* <button onClick={props.editPost(props.post)}> Edit Post </button> */}
        // </div>
    return (
        post
    )
};

export default PostIndexItem;