import React from 'react';
var d3 = Object.assign({}, require('d3-time-format'))

const warningIconUri = require('../../../assets/icon_eh_warning.png');
const closeIconUri = require('../../../assets/icon_eh_error.png');
const dotUri = require('../../../assets/dot.svg');
const iconActivity = require('../../../assets/icon_eh_activity.png');

class Dots extends React.Component {

  shouldComponentUpdate(newProps) {
    if (this.props.innerWidth === newProps.innerWidth) {
      return false;
    }


    return true;
  }
  render() {
  let dots = this.props.data.map((d) => {
    let xDataKey = d.x;
    let iconUri = dotUri;

    if (this.props.xDataType === 'date') {
      xDataKey = d3.timeFormat('%I:%M%p')(d.x);
    }

    if (d.state === 'warning') {
      iconUri = warningIconUri;
    } else if (d.state === 'error') {
      iconUri = closeIconUri;
    } else {
      iconUri = iconActivity;
    }

    if (d.state === 'warning' || d.state === 'error' || d.state === 'normal') {
      // this approach breaks IE11
      // svgImage = `<image
      //   xmlns="http://www.w3.org/2000/svg"
      //   xlink:href=${iconUri}
      //   x=${this.props.xScale(d.x) - 25}
      //   y=${this.props.yScale(d.y) - 25}
      //   width="50px"
      //   height="50px"
      //   class="svgicon"
      //   key="svgicon${d.notificationId}"
      //   id="svgicon${d.notificationId}"
      //   cx=${this.props.xScale(d.x)}
      //   cy=${this.props.yScale(d.y)}
      //   data-key=${xDataKey}
      //   data-value=${d.y}
      //   data-notification="${d.notificationType}"
      //   data-state="${d.state}"
      //   />`;


        const el = (<g
          key={`tooltip${d.notificationId}`}
          x={this.props.xScale(d.x) - 15}
          y={this.props.yScale(d.y) - 15}
          width="32px"
          id={`tooltip${d.notificationId}`}
          height="32px"
          onMouseOver={(e) => { this.props.revealSidebarOperationOnHover(d.notificationId); this.props.showToolTip(e); this.props.changeIcon(e); }}
          onClick={(e) => { this.props.revealSidebarOperationDetailOnClick(d.notificationId); this.props.hideToolTip(e); }}
          onMouseOut={(e) => { this.props.hideToolTip(e); this.props.hideSidebarOperationMouseOut(); this.props.changeIconBack(e); }}

        ><image
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref={iconUri}
        x={this.props.xScale(d.x) - 25}
        y={this.props.yScale(d.y) - 25}
        width="50px"
        height="50px"
        className="svgicon"
        key={`svgicon${d.notificationId}`}
        id={`svgicon${d.notificationId}`}
        cx={this.props.xScale(d.x)}
        cy={this.props.yScale(d.y)}
        data-key={xDataKey}
        data-value={d.y}
        data-notification={`${d.notificationType}`}
        data-state={`${d.state}`}
        /></g>);


      return (
        el
      );
    }
    return (
      ''
    );
  });

  return (
    <g id="dots"> {dots} </g>
  );
}}

Dots.propTypes = {
  showToolTip: React.PropTypes.func,
  hideToolTip: React.PropTypes.func,
  data: React.PropTypes.array,
  xScale: React.PropTypes.func,
  yScale: React.PropTypes.func,
  xDataType: React.PropTypes.string,
  hideSidebarOperationMouseOut: React.PropTypes.func,
  revealSidebarOperationOnHover: React.PropTypes.func,
  revealSidebarOperationDetailOnClick: React.PropTypes.func,
  changeIconBack: React.PropTypes.func,
  innerWidth: React.PropTypes.number,
  changeIcon: React.PropTypes.func,
};

Dots.defaultProps = {
  xDataType: 'date',
  data: [],
};

export default Dots;
