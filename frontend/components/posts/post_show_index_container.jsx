import { connect } from 'react-redux';
import { showAllPosts, deletePost, editPost, fetchShowPosts } from '../../actions/post_actions';
import PostShowIndex from './post_show_index';
import { createLike, removeLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
    
    let posts = Object.values(state.posts)
    
    
    return ({
        posts: posts,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        userId: ownProps.match.params.id

    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        showAllPosts: () => dispatch(showAllPosts()),
        createLike: (post_id) => dispatch(createLike(post_id)),
        removeLike: (post_id) => dispatch(removeLike(post_id)),
        deletePost: (id) => dispatch(deletePost(id)),
        editPost: (post) => dispatch(editPost(post)),
        fetchShowPosts: (id) => dispatch(fetchShowPosts(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShowIndex);