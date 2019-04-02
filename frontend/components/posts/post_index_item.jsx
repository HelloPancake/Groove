import React from 'react';

const PostIndexItem = (props) => (
    <div className="PostIndexItem">
        {/* <div>{props.post.title}</div> */}
        <div>{props.post.body}</div>
        {/* <button onClick={props.deletePost(props.post.id)}> Delete Post </button> */}
        {/* <button onClick={props.editPost(props.post)}> Edit Post </button> */}
    </div>
);

export default PostIndexItem;