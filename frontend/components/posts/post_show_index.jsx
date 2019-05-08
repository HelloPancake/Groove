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
        // let posts = this.props.posts.filter( post => {
        //     return(
        //         post.user_id == this.props.currentUser.id
        //         )
        //     })
            
        
        
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

            <div className="PostIndexContainer">
                <ul>
                    {posts}
                </ul>
            </div>
            </>
        );
    }
}

export default PostShowIndex;
