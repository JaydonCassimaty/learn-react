import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
      return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
  }

  class ProductRow extends React.Component {
    render() {
      var name = this.props.product.stocked ?
        this.props.product.name :
        <span style={{color: 'red'}}>
          {this.props.product.name}
        </span>;
      return (
        <tr>
          <td>{name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    }
  }

export default ProductCategoryRow;
