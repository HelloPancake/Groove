import React from 'react';
import Modal from '../modal/modal';

class ImageCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            post_type: "image",
            mediaFile: null,
            mediaUrl: null
        };
        this.state.show = true;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })

    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[body]', this.state.body);
        formData.append('post[media]', this.state.mediaFile);
        formData.append('post[post_type]', this.state.post_type);
        this.props.createPost(formData);
        this.props.history.push("/dashboard");
    }

    handleFile(e){
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({mediaFile: file, mediaUrl: fileReader.result});
        };

        if (file) {
            fileReader.readAsDataURL(file);
        };

    }

    render() {
        console.log(this.state);
        const preview = this.state.mediaUrl ? <img src={this.state.mediaUrl} className="preview"/> : null;
        if (this.state.show) {

            return (
                <div className="ModalTextForm">
                    <Modal clickListener={() => {
                        this.setState({ show: false });
                        this.props.history.push("/dashboard")
                    }} backgroundColor="rgba(0, 0, 0, 0.6)" />

                    <form onSubmit={this.handleSubmit} className="createForm">
                        <div className="postUser">{this.props.currentUser.username}</div>
                        <input className="uploadFileButton" type="file" onChange={this.handleFile}/>
                        {preview}
                        <textarea placeholder="Body" className="createBody" type="text" value={this.state.body} onChange={this.update("body")}></textarea>
                        <input className="postButton" type="submit" value="Post" />
                    </form>

                </div>
            );
        }
        else {
            return null;
        };
    }
}

export default ImageCreateForm;
