import React from 'react';

const PostIndexItem = (props) => {
    let post;

    if (props.post.post_type == "quote"){
        post = (
            <div className="PostIndexItem">
                <div>"{props.post.title}"</div>  
                <div>{props.post.body}</div>  
            </div>
            )}
    else if (props.post.post_type == "image"){
        post = (
            <div className="PostIndexItem">
                <img src={props.post.media}/>
                <div>{props.post.body}</div>  
            </div>
        )}
    else if (props.post.post_type == "post"){
        post = (
            <div className="PostIndexItem">
                <div>{props.post.title}</div>
                <div>{props.post.body}</div>
            </div>
        )}
    else if (props.post.post_type == "link"){
        post = (
            <div className="PostIndexItem">
                <a href={props.post.title}>{props.post.title}</a>
            </div>
        )}
    else if (props.post.post_type == "audio"){
        post = (
            <div className="PostIndexItem">
                <audio controls>
                    <source src={props.post.media} />
                </audio>
            </div>
        )}
    else if (props.post.post_type == "video"){
        post = (
            <div className="PostIndexItem">
                <video controls>
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