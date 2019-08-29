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
                <div>showing all posts from</div>
                {/* <div className="IndexItemUser">{props.users[props.post.user_id].username}</div> */}
            <div className="PostIndexContainer">
                <div className='MainBackground'></div>
                <ul>
                    {posts}
                </ul>
            </div>
            </>
        );
    }
}

export default PostShowIndex;
