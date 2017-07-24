import React, { Component } from 'react';

class Comment extends Component{
  constructor(props){
    super(props);
    this.state = {editing: false};
  }

  saveComment = () =>{
    this.setState({editing: false});
    this.props.updateCommentText(this.refs.newText.value, this.props.index);
  }

  editComment = () => {
    this.setState({editing:true});
  }

  removeComment = () => {
    this.props.deleteFromBoard(this.props.index);
  }

  renderNormal = () => {
    return(
      <div>
        <div>{this.props.children}</div>
        <button onClick={this.editComment}>Edit</button>
        <button onClick={this.removeComment}>Remove</button>
      </div>
    );
  }

  renderForm = () => {
    return(
      <div>
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.saveComment}>Save</button>
      </div>
    );

  }
  render(){
    if(this.state.editing){
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}

export default Comment;
