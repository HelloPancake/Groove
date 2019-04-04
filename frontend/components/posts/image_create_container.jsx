import { connect } from 'react-redux';
import { createImagePost } from '../../actions/post_actions'
import ImageCreateForm from './image_create_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createImagePost(post))

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImageCreateForm));