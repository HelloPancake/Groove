import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/post_actions'
import PostCreateForm from './post_create_form';

const mapStateToProps = (state) => {
    return ({
        post: {body:'', title: '' }
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreateForm);