import React from 'react';

const colorWarning = '#ED9C14';
const colorCritical = '#c0382b';
const colorNormal = '#1ABC9C';

const Gradient = (props) => {
  return (
    <defs>
    <linearGradient id="lineChartGradient" gradientUnits="userSpaceOnUse" x1="0" y1="80%" x2="100%" y2="40%">
      {
        props.colors.map((item, idx) => {
            const timeScale = 43200;
            const timeArray = item.x.split(' ');
            const timeArrayDays = timeArray[0].split('-');
            const timeArrayHours = timeArray[1].split(':');
            const t = new Date(timeArrayDays[2], timeArrayDays[1] - 1, timeArrayDays[0], timeArrayHours[0], timeArrayHours[1], timeArrayHours[2]);
            const elapsed = (((t.getHours() * 60) + t.getMinutes()) * 60);

            let color = colorNormal;
            let offset = 0;
            if (item.state === 'error') {
              color = colorCritical;
            } else if (item.state === 'warning') {
              color = colorWarning;
            }

            offset = Math.floor((elapsed / timeScale) * 100);
            offset = parseInt(offset, 0);
            return (
            <stop key={idx} offset={`${offset}%`} stopColor={color}></stop>
          );
        })
      }
    </linearGradient>
    </defs>
  );
};

Gradient.propTypes = {
  id: React.PropTypes.string,
  color1: React.PropTypes.string,
  color2: React.PropTypes.string,
  color3: React.PropTypes.string,
  color4: React.PropTypes.string,
  colors: React.PropTypes.array,
};

export default Gradient;
