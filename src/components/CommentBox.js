import React, { Component } from 'react';

class CommentBox extends Component {
    state = { Comment: '' };

    handleChange = event => {
        this.setState({ Comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ Comment: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.Comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;