import React, { Component } from 'react';
import 'containers/app/Dropdown.css';
import DropData,{link1} from 'assets/data/DropData';

class Dropdown extends Component{
  render() {
    return (
        <div className="dropdown">
          <DropdownBox items={DropData}/>
        </div>
    );
  }
}

class DropdownBox extends Component{
  constructor(props) {
    super(props);
    this.state = {text: link1}
  }

  setSelection = (text) => {
    this.setState({text: text});
  }

  generateItem = (item, i) => {
    return <DropdownItem key={i} text={item.text} url={item.url} setSelection={this.setSelection}/>;
  }

  render() {
    return (
      <div>
      <button className="dropbtn">click me!</button>
      <div>{this.state.text}</div>
      <div className="dropdown-content">
        {this.props.items.map(this.generateItem)}
      </div>
      </div>
    );
  }
}

class DropdownItem extends Component{
  saveSelection = () =>{
    this.props.setSelection(this.props.text);
  }

  render() {
      return (
        <div>
          <button onClick={this.saveSelection} href={this.props.url}>{this.props.text}</button>
        </div>
      );
  }
}

export default Dropdown;
