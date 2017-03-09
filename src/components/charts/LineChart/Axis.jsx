import React from 'react';
import ReactDOM from 'react-dom';
var d3 = Object.assign({}, require('d3-axis'))

class Axis extends React.Component {
  constructor(props) {
    super(props);
    this.renderAxis = this.renderAxis.bind(this);
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.props.axis);
  }

  render() {
    const translate = `translate(0, ${this.props.h})`;
    return (
      <g className="axis" transform={this.props.axisType === 'x' ? translate : ''} ></g>
    );
  }
}

Axis.propTypes = {
  h: React.PropTypes.number,
  axis: React.PropTypes.func,
  axisType: React.PropTypes.oneOf(['x', 'y']),
};

export default Axis;
