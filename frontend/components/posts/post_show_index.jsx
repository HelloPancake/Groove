import React from 'react';
import PostIndexItem from './post_index_item';


class PostShowIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchShowPosts(this.props.userId);
    }

    render() {
        if(!this.props.users[this.props.userId]){
            return null
        }
        
        let posts = this.props.posts.map(post => {
            return (
                <PostIndexItem
                    key={`${post.id}`}
                    post={post}
                    users={this.props.users}
                    createLike={this.props.createLike}
                    removeLike={this.props.removeLike}
                    currentUser={this.props.currentUser}
                    deletePost={this.props.deletePost}
                    editPost={this.props.editPost}
                    fetchShowPosts={this.props.fetchShowPosts}
                />
            )
        }).reverse();

        return (
            <>
                <div className="solidDiv"></div>
                <div className="userIndexTitle">all posts from</div>
                
                <div className="UserName">{this.props.users[this.props.userId].username}</div>
                <div className='MainBackground'></div>
            <div className="showIndex">
                <ul>
                    {posts}
                </ul>
            </div>
            </>
        );
    }
}

export default PostShowIndex;
