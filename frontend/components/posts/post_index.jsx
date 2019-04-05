import React from 'react';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {

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
