import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => {
    
    let post;
    let likesArr = [];
    {props.post.likers.forEach(like => {
        likesArr.push(like.user_id)
    })};
   
    
    if (props.post.post_type == "quote"){
        post = (
            <div className="PostIndexItem">
                <Link className="postLink" to={`/profile/${props.post.user_id}`}><div className="IndexItemUser">{props.users[props.post.user_id].username}</div></Link>
                <div className="QuoteFeed">"{props.post.title}"</div>  
                <div className="QuoteSourceFeed">-{props.post.body}</div>  
                <div className="changes">
                    {props.post.user_id == props.currentUser.id ?
                        <div className="deleteButton">
                            <button id="deleteButton" onClick={() => props.deletePost(props.post.id)}>delete</button>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="likeandCount">
                        <div className="likeNum">{likesArr.length}&nbsp;likes&nbsp;</div>
                    {likesArr.includes(props.currentUser.id) ?
                        <div id="heart">
                            <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                        </div>
                        :
                        <div id="heart">
                            <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                        </div>
                    }
                    </div>
                </div>
            </div>
            )}
    else if (props.post.post_type == "image"){
        post = (
            <div className="PostIndexItem">
                <Link className="postLink" to={`/profile/${props.post.user_id}`}><div className="IndexItemUser">{props.users[props.post.user_id].username}</div></Link>
                <img className="ImagePost" src={props.post.media}/>
                <div>{props.post.body}</div>  
                <div className="changes">
                    {props.post.user_id == props.currentUser.id ?
                        <div className="deleteButton">
                            <button id="deleteButton" onClick={() => props.deletePost(props.post.id)}>delete</button>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="likeandCount">
                        <div className="likeNum">{likesArr.length}&nbsp;likes&nbsp;</div>
                        {likesArr.includes(props.currentUser.id) ?
                            <div id="heart">
                                <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                            </div>
                            :
                            <div id="heart">
                                <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )}
    else if (props.post.post_type == "post"){
        post = (
            <div className="eachIndexItem">
                {/* <img >{props.users[props.post.user_id].username}</div> */}
                <div className="PostIndexItem">
                    <Link className="postLink" to={`/profile/${props.post.user_id}`}><div className="IndexItemUser">{props.users[props.post.user_id].username}</div></Link>
                    <div className="indexTitle">{props.post.title}</div>
                    <div className="indexBody">{props.post.body}</div>
                    <div className="changes">
                        {props.post.user_id == props.currentUser.id ?
                            <div className="deleteButton">
                                <button id="deleteButton" onClick={() => props.deletePost(props.post.id)}>delete</button>
                            </div>
                            :
                            <div></div>
                        }
                        <div className="likeandCount">
                            <div className="likeNum">{likesArr.length}&nbsp;likes&nbsp;</div>
                            {likesArr.includes(props.currentUser.id) ?
                                <div id="heart">
                                    <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                                </div>
                                :
                                <div id="heart">
                                    <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                                </div>
                            }
                        </div>
                    </div>

                    
                </div>
            </div>
        )}
    else if (props.post.post_type == "link"){
        post = (
            <div className="PostIndexItem">
                <Link className="postLink" to={`/profile/${props.post.user_id}`}><div className="IndexItemUser">{props.users[props.post.user_id].username}</div></Link>
                <a href={`https://${props.post.title}`} className="actualLink" rel="external">{props.post.title}</a>
                <div className="changes">
                    {props.post.user_id == props.currentUser.id ?
                        <div className="deleteButton">
                            <button id="deleteButton" onClick={() => props.deletePost(props.post.id)}>delete</button>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="likeandCount">
                        <div className="likeNum">{likesArr.length}&nbsp;likes&nbsp;</div>
                        {likesArr.includes(props.currentUser.id) ?
                            <div id="heart">
                                <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                            </div>
                            :
                            <div id="heart">
                                <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                            </div>
                        }
                    </div>
                </div>


            </div>
        )}
    else if (props.post.post_type == "audio"){
        post = (
            <div className="PostIndexItem">
                <Link className="postLink" to={`/profile/${props.post.user_id}`}><div className="IndexItemUser">{props.users[props.post.user_id].username}</div></Link>
                <audio controls className="indexAudio">
                    <source src={props.post.media} />
                </audio>
                <div className="indexBody">{props.post.body}</div>
                <div className="changes">
                    {props.post.user_id == props.currentUser.id ?
                        <div className="deleteButton">
                            <button id="deleteButton" onClick={() => props.deletePost(props.post.id)}>delete</button>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="likeandCount">
                        <div className="likeNum">{likesArr.length}&nbsp;likes&nbsp;</div>
                        {likesArr.includes(props.currentUser.id) ?
                            <div id="heart">
                                <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                            </div>
                            :
                            <div id="heart">
                                <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                            </div>
                        }
                    </div>
                </div>


            </div>
        )}
    else if (props.post.post_type == "video"){
        post = (
            <div className="PostIndexItem">
                <Link className="postLink" to={`/profile/${props.post.user_id}`}><div className="IndexItemUser">{props.users[props.post.user_id].username}</div></Link>
                <video controls loop className="indexVideo"  >
                    <source src={props.post.media} />
                </video>
                <div className="changes">
                    {props.post.user_id == props.currentUser.id ?
                        <div className="deleteButton">
                            <button id="deleteButton" onClick={() => props.deletePost(props.post.id)}>delete</button>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="likeandCount">
                        <div className="likeNum">{likesArr.length}&nbsp;likes&nbsp;</div>
                        {likesArr.includes(props.currentUser.id) ?
                            <div id="heart">
                                <button onClick={() => props.removeLike(props.post.id)}><i id="heart-fill" className="fas fa-heart fa-lg"></i></button>
                            </div>
                            :
                            <div id="heart">
                                <button onClick={() => props.createLike(props.post.id)}><i id="heart-empty" className="far fa-heart fa-lg"></i></button>
                            </div>
                        }
                    </div>
                </div>


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