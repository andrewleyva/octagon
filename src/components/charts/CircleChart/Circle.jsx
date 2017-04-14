import React from 'react'
import palette from '../../../palette'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

var d3 = Object.assign({}, require('d3-shape'))

const twoPi = Math.PI * 2
// const formatPercent = d3.format('.0%');

const CircleChart = (props) => {
  const { color, border, endPercent, radius, padding, backgroundOpacity } = props
  const boxSize = (radius + padding) * 2
  const endPercentValue = props.endPercentValue

  const arc = d3.arc()
            .startAngle(0)
            .innerRadius(radius)
            .outerRadius(radius - border)
  const arcbg = d3.arc()
            .startAngle(0)
            .innerRadius(radius - 4)
            .outerRadius(radius - 1)
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <div>
      <svg width={boxSize} height={boxSize}>
        <g transform='translate(55,55)'>
          <g {...externalAttributes} className={`progress-meter ${props.className}`}>
            <path
              {...externalAttributes} className={`background ${props.className}`}
              fill='#8faec1'
              fillOpacity={backgroundOpacity}
              d={arcbg.endAngle(twoPi)()}
            />
            <path
              {...externalAttributes} className={`foreground ${props.className}`}
              fill={color}
              fillOpacity='1'
              d={arc.endAngle(twoPi * endPercent)()}
            />
            <text
              {...externalAttributes} className={`current-progress ${props.className}`}
              fill={color}
              textAnchor='middle'
              dy='.35em'
              fontSize='2.5em'
              fontWeight='300'
            >
              {endPercentValue}
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

CircleChart.propTypes = {
  color: React.PropTypes.string,
  border: React.PropTypes.number,
  endPercent: React.PropTypes.number,
  radius: React.PropTypes.number,
  padding: React.PropTypes.number,
  endPercentValue: React.PropTypes.string,
  backgroundOpacity: React.PropTypes.number
}

CircleChart.defaultProps = {
  color: palette.blue,
  border: 5,
  padding: 10,
  endPercent: 0.45,
  radius: 45,
  backgroundOpacity: 0.5
}

export default CircleChart
