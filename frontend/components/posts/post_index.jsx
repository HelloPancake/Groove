import React from 'react';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.showAllPosts();
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
                    
                />
            )
        }).reverse();

        return (
            <div className="PostIndexContainer">
                <ul>
                    {posts}
                </ul>
            </div>
        );
    }
}

export default PostIndex;
