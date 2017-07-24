import React, { Component } from 'react';
import Comment from './Comment';

class Board extends Component{
  constructor(props){
    super(props);
    this.state = {comments: []
  }
}

addComment = (text) => {
  var arr = this.state.comments;
  arr.push(text);
  this.setState({comments: arr});
}

deleteComment = (i) => {
  console.log('Removing Comment: ' + i);
  var arr = this.state.comments;
  arr.splice(i, 1);
  this.setState({comments: arr});
}

updateComment = (newText, i) => {
  console.log('Updating Comment');
  var arr = this.state.comments;
  arr[i] = newText;
  this.setState({comments: arr});
}

eachComment = (text, i) => {
  return (<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.deleteComment}>
    {text}
    </Comment>
  );
}

  render(){
      return(
        <div>
          <button onClick={this.addComment.bind(null, 'Default Text...')}>Add New</button>
          <div>
            {this.state.comments.map(this.eachComment)}
          </div>
        </div>
      );
    }
}

export default Board;
