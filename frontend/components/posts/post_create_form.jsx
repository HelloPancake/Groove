import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class PostCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.post;
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
        this.props.createPost(this.state)
    }

    render() {

        if(this.state.show) {
            
            return (
                <div className="ModalTextForm">
                    <Modal clickListener={() => {
                        this.setState({show: false});
                        this.props.history.push("/dashboard")
                    }} backgroundColor="transparent"/>
    
                    <form onSubmit={this.handleSubmit} className="createForm">
                        {/* <div>{this.props.currentUser}</div> */}
                        <input placeholder="Title" className="createTitle" type="text" value={this.state.title}  onChange={this.update("title")} />
                        <textarea placeholder="Body" className="createBody" type="text" value={this.state.body} onChange={this.update("body")}></textarea>
                        <input className="postButton" type="submit" value="Post" />
                    </form>
                    
                </div>
            );
        }
        else{
            return null
        }
    }
}

export default PostCreateForm;
