import React from 'react';
var d3 = Object.assign({}, require('d3-shape'))
import Line from './Line';

const DataSeries = (props) => {
  const { data, colors, xScale, yScale, interpolationType } = props;

  const line = d3.line()
    .x((d) => { return xScale(d.x); })
    .y((d) => { return yScale(d.y); })
    .curve(interpolationType);

  let lines = data.points.map((series, id) => {
    return (
      <Line
        path={line(series)}
        stroke={colors[id]}
        key={id}
      />
    );
  });

  return (
    <g>
      <g>{lines}</g>
    </g>
  );
};

DataSeries.propTypes = {
  colors: React.PropTypes.array,
  data: React.PropTypes.object,
  interpolationType: React.PropTypes.func,
  xScale: React.PropTypes.func,
  yScale: React.PropTypes.func,
};

DataSeries.defaultProps = {
  data: [],
  interpolationType: d3.curveCardinal,
  colors: d3.schemeCategory10,
};

export default DataSeries;
