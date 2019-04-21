import React from 'react';

const PostIndexItem = (props) => {
    let post;
    let likesArr = [];
    {props.post.likers.forEach(like => {
        likesArr.push(like.user_id)
    })};
    
    
    
    if (props.post.post_type == "quote"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <div className="QuoteFeed">"{props.post.title}"</div>  
                <div className="QuoteSourceFeed">-{props.post.body}</div>  
                {likesArr.includes(props.currentUser.id) ?
                    <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                    :
                    <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                }
            </div>
            )}
    else if (props.post.post_type == "image"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <img className="ImagePost" src={props.post.media}/>
                <div>{props.post.body}</div>  
                {likesArr.includes(props.currentUser.id) ?
                    <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                    :
                    <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                }
            </div>
        )}
    else if (props.post.post_type == "post"){
        
        
        post = (
            <div className="eachIndexItem">
                <div className="profileOrb">{props.users[props.post.user_id].username}</div>
                <div className="PostIndexItem">
                    <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                    <div className="indexTitle">{props.post.title}</div>
                    <div className="indexBody">{props.post.body}</div>
                    {likesArr.includes(props.currentUser.id) ? 
                        <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                        :   
                        <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button> 
                    }
                    {likesArr.length == 0 ? null 
                    :
                        <div className="likeNum">{likesArr.length}</div>
                    }
                
                </div>
            </div>
            
        )}
    else if (props.post.post_type == "link"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <a href={`https://${props.post.title}`} className="actualLink" rel="external">{props.post.title}</a>
                {likesArr.includes(props.currentUser.id) ?
                    <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                    :
                    <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                }
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
                {likesArr.includes(props.currentUser.id) ?
                    <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                    :
                    <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                }
            </div>
        )}
    else if (props.post.post_type == "video"){
        post = (
            <div className="PostIndexItem">
                <div className="IndexItemUser">{props.users[props.post.user_id].username}</div>
                <video controls loop className="indexVideo"  >
                    <source src={props.post.media} />
                </video>
                {likesArr.includes(props.currentUser.id) ?
                    <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                    :
                    <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                }
            </div>
        )}
    else (
        post = null
    )
    
    return (
        post
    )
};

export default PostIndexItem;