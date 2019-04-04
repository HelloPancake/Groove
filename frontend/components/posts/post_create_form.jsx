import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class PostCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            post_type: "post"
        };
        this.state.show = true;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.history.push("/");
       
    }

    render() {

        if(this.state.show) {
            
            return (
                <div className="ModalTextForm">
                    <Modal clickListener={() => {
                        this.setState({show: false});
                        this.props.history.push("/dashboard");
                    }} backgroundColor="rgba(0, 0, 0, 0.6)"/>
    
                    <form onSubmit={this.handleSubmit} className="createForm">
                        <div className="postUser">{this.props.currentUser.username}</div>
                        <input placeholder="Title" className="createTitle" type="text" onChange={this.update("title")} />
                        <textarea placeholder="Body" className="createBody" type="text" onChange={this.update("body")}></textarea>
                        <input className="postButton" type="submit" value="Post" />
                    </form>
                    
                </div>
            );
        }
        else{
            return null;
        };
    }
}

export default PostCreateForm;
