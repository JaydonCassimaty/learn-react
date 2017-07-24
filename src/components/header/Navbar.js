import React, { Component } from 'react';
import 'containers/app/Navbar.css';

class Navbar extends Component{
  
  generateItem = (item, i) => {
    return <NavbarItem key={i} text={item.text} url={item.url} img={item.img}/>;
  }

  render() {
    return (
      <ul className="menu">
        {this.props.items.map(this.generateItem)}
      </ul>
    );
  }
}

class NavbarItem extends Component{
  render() {
    if (this.props.img){
      return (
        <li>
          <a className="navLogo" href={this.props.url}><img src={this.props.img} alt={this.props.text}></img>{this.props.text}</a>
        </li>
      );
    } else {
      return (
        <li>
          <a href={this.props.url}>{this.props.text}</a>
        </li>
      );
    }
  }
}

export default Navbar;
