import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import Axis from '../Chart/Axis';
import Dots from './AlertDots';
import Grid from '../Chart/Grid';
import Gradient from './Gradient';
import LineChartTooltip from './LineChartTooltip';
import elementResizeEvent from 'element-resize-event';
import * as ChartUtils from '../Chart/utils';
var d3 = Object.assign({}, require('d3-selection'), require('d3-axis'), require('d3-format'), require('d3-time-format'), require('d3-scale'), require('d3-shape'))

import '../../../styles/components/line-chart.css';

const iconActivity = require('../../../assets/icon_eh_activity.png');
const iconActivityHover = require('../../../assets/icon_eh_activity_hover.png');
const iconWarning = require('../../../assets/icon_eh_warning.png');
const iconWarningHover = require('../../../assets/icon_eh_warning_hover.png');
const iconError = require('../../../assets/icon_eh_error.png');
const iconErrorHover = require('../../../assets/icon_eh_error_hover.png');
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: {
        display: false,
        data: { key: '', value: '' },
      },
      width: this.props.width,
    };
    this.showToolTip = this.showToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.revealedChartDot = this.revealedChartDot.bind(this);
    this.hideRevealedChartDot = this.hideRevealedChartDot.bind(this);
  }

  componentWillMount() {
    this.setState({ width: this.props.width });
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    elementResizeEvent(node, this.updateSize);
    this.updateSize();
  }
  componentWillReceiveProps(newProps) {
    if (this.props.hasDots) {
      if (newProps.revealedChartDot == null && this.props.revealedChartDot) {
          this.hideRevealedChartDot(this.props.revealedChartDot);
      } else if (newProps.revealedChartDot !== this.props.revealedChartDot) {
        this.hideRevealedChartDot(this.props.revealedChartDot);
      }

      if (newProps.revealedChartDot) {
        this.revealedChartDot(newProps.revealedChartDot);
      }
    }
  }
  updateSize() {
    const node = ReactDOM.findDOMNode(this);
    this.setState({ width: node.offsetWidth });
  }
  showToolTip(e) {
    if (!e.target) {
      e.target = e;
    }
    e.target.setAttribute('fill', '#FFFFFF');
    this.setState({
      tooltip: {
        display: true,
        data: {
          key: e.target.getAttribute('data-key'),
          value: e.target.getAttribute('data-value'),
          notificationType: e.target.getAttribute('data-notification'),
          state: e.target.getAttribute('data-state'),
        },
        pos: {
          x: e.target.getAttribute('cx'),
          y: e.target.getAttribute('cy'),
        },
      },
    });
  }

  hideToolTip(e) {
    if (!e.target) {
      e.target = e;
    }
    e.target.setAttribute('fill', '#7dc7f4');
    this.setState({
      tooltip: {
        display: false,
        data: {
          key: '',
          value: '',
          notificationType: '',
          state: '',
        },
      },
    });
  }
  changeIcon(e) {
    if (!e.target) {
      e.target = e;
    }
    const svg = document.getElementById(e.target.id);
    if (svg.getAttribute('data-state') === 'warning') {
      svg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconWarningHover);
    } else if (svg.getAttribute('data-state') === 'error') {
      svg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconErrorHover);
    } else {
      svg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconActivityHover);
    }
  }
  changeIconBack(e) {
    if (!e.target) {
      e.target = e;
    }
    const svg = document.getElementById(e.target.id);
    if (svg.getAttribute('data-state') === 'warning') {
      svg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconWarning);
    } else if (svg.getAttribute('data-state') === 'error') {
      svg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconError);
    } else {
      svg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconActivity);
    }
  }

  revealedChartDot(id) {
    const tt = document.getElementById('svgicon' + id);
    if (tt) {
      this.showToolTip(tt);
      this.changeIcon(tt);
    }
  }
  hideRevealedChartDot(id) {
    const tt = document.getElementById('svgicon' + id);
    if (tt) {
      this.hideToolTip(tt);
      this.changeIconBack(tt);
    }
  }
  render() {
    const margin = { top: 40, right: 50, bottom: 15, left: 30 };
    const innerWidth = this.state.width - (margin.left + margin.right);
    const innerHeight = this.props.height - (margin.top + margin.bottom);
    const data = Immutable.fromJS(this.props.data).toJS(); // copy data from props
    const xScaleTimeLineData = Immutable.fromJS(this.props.xScaleTimeLineData).toJS();
    let xScaleTimeLine = null;
    let xAxis = null;
    let xScale = null;

    if (this.props.xDataType === 'date') {
      const parseDate = d3.timeParse('%m-%d-%Y %H:%M:%S');

      data.forEach((d) => {
        d.x = parseDate(d.x);
      });
      xScaleTimeLineData.forEach((d) => {
        d.x = parseDate(d.x);
      });

      xScale = ChartUtils.xScaleTime(data, innerWidth);
      xScaleTimeLine = ChartUtils.xScaleTime(xScaleTimeLineData, innerWidth);
      xAxis = d3.axisBottom()
        .scale(xScaleTimeLine)
        .tickValues(xScaleTimeLineData.map((d) => d.x))
        .tickFormat(d3.timeFormat('%I %p'));
    } else {
      xScale = ChartUtils.xScaleLinear(data, innerWidth);
      xAxis = d3.axisBottom()
        .scale(xScale)
        .tickValues(data.map((d) => d.x));
    }

    // let yScale = ChartUtils.yScaleLinear(data, innerHeight, 100);
    // TODO: Need to write two lines in one chart
    // Hard-coded max domain for yScale for now.
    let yScale = d3.scaleLinear()
      .domain([0, this.props.yMax])
      .range([innerHeight, 0]);

    let yAxis = d3.axisLeft()
      .scale(yScale);
    let xGrid = d3.axisBottom()
      .scale(xScale)
      .tickSize(-innerHeight, 0, 0)
      .tickFormat('');

    const yGrid = d3.axisLeft()
    .scale(yScale)
    .tickSize(-innerWidth, 0, 0)
    .tickFormat('');


    const line = d3.line()
      .x((d) => { return xScale(d.x); })
      .y((d) => { return yScale(d.y); })
      .curve(d3.curveCardinal);

      let transform = `translate(${margin.left}, ${margin.top})`;

      return (
        <div className={`line-chart-wrapper ${this.props.lineChartClass}`}>
          <svg width={this.state.width} height={this.props.height}>
            <rect width={this.state.width} height={this.props.height} fill="none" />
            <g transform={transform}>
              {this.props.isGradient ? <Gradient colors={this.props.data} /> : ''}
              {this.props.hideXGrid ? '' : <Grid height={innerHeight} grid={xGrid} gridType="x" />}
              {this.props.hideYGrid ? '' : <Grid height={innerHeight} grid={yGrid} gridType="y" />}
              {this.props.hideXAxis ? '' : <Axis height={innerHeight} axis={xAxis} axisType="x" orientation="bottom" />}
              {this.props.hideYAxis ? '' : <Axis height={innerHeight} axis={yAxis} axisType="y" orientation="left" />}
              <path
                className="line shadow"
                d={line(data)}
                stroke={this.props.isGradient ? 'url(#lineChartGradient)' : this.props.strokeColor}
                strokeLinecap="round"
                strokeWidth={this.props.strokeWidth}
                strokeDasharray={this.props.strokeDasharray}
              />
              {this.props.tooltipVisible ? <LineChartTooltip tooltip={this.state.tooltip} chartWidth={this.state.width} chartHeight={this.props.height} /> : ''}
              {this.props.dotVisible ?
                <Dots
                  data={data}
                  xScale={xScale}
                  yScale={yScale}
                  showToolTip={this.showToolTip}
                  hideToolTip={this.hideToolTip}
                  changeIcon={this.changeIcon}
                  innerWidth={innerWidth}
                  changeIconBack={this.changeIconBack}
                  hideSidebarOperationMouseOut={this.props.hideSidebarOperationMouseOut}
                  revealSidebarOperationOnHover={this.props.revealSidebarOperationOnHover}
                  revealSidebarOperationDetailOnClick={this.props.revealSidebarOperationDetailOnClick}
                />
                :
                ''
              }
            </g>
          </svg>
        </div>
      );
  }
}

LineChart.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  xScaleTimeLineData: React.PropTypes.array,
  dotVisible: React.PropTypes.bool,
  tooltipVisible: React.PropTypes.bool,
  xDataType: React.PropTypes.string,
  hideSidebarOperationMouseOut: React.PropTypes.func,
  revealSidebarOperationOnHover: React.PropTypes.func,
  revealSidebarOperationDetailOnClick: React.PropTypes.func,
  strokeDasharray: React.PropTypes.string,
  strokeWidth: React.PropTypes.string,
  strokeColor: React.PropTypes.string,
  lineChartClass: React.PropTypes.string,
  hideXGrid: React.PropTypes.bool,
  hideYGrid: React.PropTypes.bool,
  hideXAxis: React.PropTypes.bool,
  hideYAxis: React.PropTypes.bool,
  isGradient: React.PropTypes.bool,
  yMax: React.PropTypes.number,
  hasDots: React.PropTypes.bool,
  revealedChartDot: React.PropTypes.number,
};

LineChart.defaultProps = {
  lineChartClass: 'line-chart',
  width: 1060,
  height: 340,
  xDataType: 'date',
  tooltipVisible: true,
  dotVisible: true,
  isGradient: false,
  revealedChartDot: null,
  hasDots: false,
};

export default LineChart;
