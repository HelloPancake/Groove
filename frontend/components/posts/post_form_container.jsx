import { connect } from 'react-redux';
import React from 'react';
import { openModal } from '../../actions/modal_actions';

import PostForm from './post_form';

const mapStateToProps = (state) => {
    return({
        
    })
}
const mapDispatchToProps = (dispatch) => {
    return({
       
        createPost: (post) => dispatch(createPost(post))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);