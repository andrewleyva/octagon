import React from 'react';

const LineChartTooltip = (props) => {
  let visibility = 'hidden';
  let transform = '';
  let x = 0;
  let width = 260;
  let height = 70;
  let transformText = `translate(${width / 2}, ${height / 2 - 5})`;
  let textColor = '#96A5A6';

  let lineColor = '#586a7b';

  let tooltipDatePos = { x: '-40px', y: '-12px' };
  let tooltipNotificatypePos = { x: '40px', y: '-10px' };
  let tooltipValuePos = { x: '20px', y: '0px' };

  if (props.tooltip.data.state === 'error') {
    textColor = '#EE5B33';
  } else if (props.tooltip.data.state === 'warning') {
    textColor = '#E99A3A';
  } else {
    textColor = '#96A5A6';
  }


  if (props.tooltip.display === true) {
    const position = props.tooltip.pos;
    x = position.x;
    visibility = 'visible';

    if (x >= (props.chartWidth - 300)) { // on the left
      transform = `translate(${x - (width / 2) - 150}, 20)`;
      tooltipDatePos = { x: '100px', y: '-25px' };
      tooltipNotificatypePos = { x: '-20px', y: '00px' };
      tooltipValuePos = { x: '-35px', y: '20px' };
    } else {
      transform = `translate(${x - width / 2}, 20)`;
      tooltipDatePos = { x: '35px', y: '-40px' };
      tooltipNotificatypePos = { x: '40px', y: '-17px' };
      tooltipValuePos = { x: '20px', y: '0px' };
    }
  } else {
    visibility = 'hidden';
  }


  // if (props.tooltip.data.state === 'error') {
  //   textColor = '#EE5B33';
  // } else if (props.tooltip.data.state === 'warning') {
  //   textColor = '#E99A3A';
  // }
  if (props.tooltip.data.state === 'error') {
    lineColor = '#cc5200';
  } else if (props.tooltip.data.state === 'warning') {
    lineColor = '#E99A3A';
  }
  textColor = '#586a7b';
  return (
    <g>
      <defs>
      <linearGradient id="grad" gradientUnits="userSpaceOnUse" x1="50%" y1="60%" x2="50%" y2="100%">
        <stop stopColor={lineColor} stopOpacity="100%" />
        <stop offset="50%" stopColor="#f8fbfd" stopOpacity="100%" />
      </linearGradient>
      </defs>
      <line visibility={visibility} x1="0" y1="0" x2="0" y2={props.chartHeight - 60} stroke="url(#grad)" strokeWidth="2px" className="verticalLine" transform={`translate(${x}, 0)`} />
      <g transform={transform}>
        <rect className="shadow" is width={width} height={height} rx="0" ry="0" visibility={visibility} fill="none" stroke="none" stroke-width="0px" />
        {props.tooltip.data.notificationType ?
            <g>

              <text is visibility={visibility} transform={transformText} >
                <tspan is x={tooltipDatePos.x} y={tooltipDatePos.y} text-anchor="middle" font-size="11px" fill={textColor}>{`${props.tooltip.data.key}`}</tspan>
                <tspan is x={tooltipNotificatypePos.x} y={tooltipNotificatypePos.y} font-weight="lighter" font-size="14px" fill={textColor}>{`${props.tooltip.data.notificationType}`}</tspan>
                <tspan is x={tooltipValuePos.x} y={tooltipValuePos.y} text-anchor="middle" font-weight="lighter" font-size="45px" fill={textColor}>{`${props.tooltip.data.value}`}</tspan>

              </text>
            }
            </g>
          :
          <text is visibility={visibility} transform={transformText} >
            <tspan is x="0" y="20px" text-anchor="middle" font-size="35px" fill={textColor}>{`${props.tooltip.data.value}`}</tspan>
          </text>
        }
      </g>
    </g>
  );
};

LineChartTooltip.propTypes = {
  chartHeight: React.PropTypes.number,
  chartWidth: React.PropTypes.number,
  tooltip: React.PropTypes.object,
};

export default LineChartTooltip;

