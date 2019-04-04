import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class QuoteCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            post_type: "quote"
        };
        // this.state = this.props.post;
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
        console.log(this.state);
        if (this.state.show) {

            return (
                <div className="ModalTextForm">
                    <Modal clickListener={() => {
                        this.setState({ show: false });
                        this.props.history.push("/dashboard")
                    }} backgroundColor="transparent" />

                    <form onSubmit={this.handleSubmit} className="createForm">
                        <div className="postUser"> {this.props.currentUser.username}</div>
                        <input placeholder='"Quote"' className="createQuote" type="text"  onChange={this.update("title")} />
                        <input placeholder="-Source" className="createSource" type="text" onChange={this.update("body")}/>
                        <input className="postButton" type="submit" value="Post" />
                    </form>

                </div>
            );
        }
        else {
            return null
        }
    }
}

export default QuoteCreateForm;
