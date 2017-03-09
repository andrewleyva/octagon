import React from 'react';

const Line = (props) => {
  let { className, path, fill, stroke, strokeWidth, strokeLinecap } = props;

  return (
    <path
      className={className}
      d={path}
      fill={fill}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeWidth={props.strokeWidth}
    />
  );
};

Line.propTypes = {
  fill: React.PropTypes.string,
  path: React.PropTypes.string.isRequired,
  stroke: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  className: React.PropTypes.string,
  strokeLinecap: React.PropTypes.string,
};

Line.defaultProps = {
  fill: 'none',
  stroke: 'blue',
  className: 'line shadow',
  strokeLinecap: 'round',
};

export default Line;
