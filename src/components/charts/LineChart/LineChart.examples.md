Gradient Enabled Line Graph
     
     
     <div className="chart__wrapper">
        <LineChart
          lineChartClass="chart__current-operation"
          data={[
            { x: '03-12-2016 01:00:00', y: 7, xDataType: 'date', state: 'warning', notificationId: 13, notificationType: 'LONG RUN OPERATION' },
            { x: '03-12-2016 02:10:00', y: 6, xDataType: 'date', state: 'warning', notificationId: 12, notificationType: 'SHORT RUN OPERATION' },
            { x: '03-12-2016 03:20:00', y: 3, xDataType: 'date', state: 'error', notificationId: 11, notificationType: 'EVENT GENERATOR' },
            { x: '03-12-2016 04:00:00', y: 2, xDataType: 'date', state: 'error', notificationId: 10, notificationType: 'RULE RUN ERROR' },
            { x: '03-12-2016 05:10:00', y: 3, xDataType: 'date', state: 'error', notificationId: 9, notificationType: 'CONNECTION ERROR' },
            { x: '03-12-2016 06:30:00', y: 5, xDataType: 'date', state: 'warning', notificationId: 8, notificationType: 'LONG RUN OPERATION' },
            { x: '03-12-2016 08:05:00', y: 2, xDataType: 'date', state: 'error', notificationId: 7, notificationType: 'EVENT GENERATOR' },
            { x: '03-12-2016 08:55:00', y: 4, xDataType: 'date', state: 'error', notificationId: 6, notificationType: 'CONNECTION ERROR' },
            { x: '03-12-2016 09:45:00', y: 7, xDataType: 'date', state: 'error', notificationId: 5, notificationType: 'TIME OUT' },
            { x: '03-12-2016 10:50:00', y: 3, xDataType: 'date', state: 'warning', notificationId: 4, notificationType: 'LONG RUN OPERATION' },
            { x: '03-12-2016 11:25:00', y: 3, xDataType: 'date', state: 'error', notificationId: 3, notificationType: 'CONNECTION ERROR' },
            { x: '03-12-2016 11:45:00', y: 6, xDataType: 'date', state: 'error', notificationId: 2, notificationType: 'OPERATION TIME-OUT' },
            { x: '03-12-2016 12:00:00', y: 5, xDataType: 'date', state: 'normal', notificationId: 1, notificationType: 'CONNECTION REQUEST' },
            ]}
          xScaleTimeLineData={[
            { x: '03-12-2016 01:00:00' },
            { x: '03-12-2016 02:00:00' },
            { x: '03-12-2016 03:00:00' },
            { x: '03-12-2016 04:00:00' },
            { x: '03-12-2016 05:00:00' },
            { x: '03-12-2016 06:00:00' },
            { x: '03-12-2016 07:00:00' },
            { x: '03-12-2016 08:00:00' },
            { x: '03-12-2016 09:00:00' },
            { x: '03-12-2016 10:00:00' },
            { x: '03-12-2016 11:00:00' },
            { x: '03-12-2016 12:00:00' },
            ]}
          xDataType="date"
          yMax={12}
          strokeWidth="6"
          strokeColor="#30A9DC"
          hideYAxis={true}
          hideYGrid={true}
          isGradient={true}
          hasDots={true}
        />
        <LineChart
          lineChartClass="chart__last-operation"
          data={[
            { x: '03-11-2016 01:00:00', y: 6, xDataType: 'date', state: 'normal', notificationId: '', notificationType: '' },
            { x: '03-11-2016 02:00:00', y: 6, xDataType: 'date', state: 'warning', notificationId: '', notificationType: '' },
            { x: '03-11-2016 03:10:00', y: 3, xDataType: 'date', state: 'normal', notificationId: '', notificationType: '' },
            { x: '03-11-2016 04:00:00', y: 2, xDataType: 'date', state: 'warning', notificationId: '', notificationType: '' },
            { x: '03-11-2016 05:00:00', y: 3, xDataType: 'date', state: 'normal', notificationId: '', notificationType: '' },
            { x: '03-11-2016 06:20:00', y: 4, xDataType: 'date', state: 'error', notificationId: '', notificationType: '' },
            { x: '03-11-2016 07:50:00', y: 1, xDataType: 'date', state: 'normal', notificationId: '', notificationType: '' },
            { x: '03-11-2016 08:50:00', y: 6, xDataType: 'date', state: 'normal', notificationId: '', notificationType: '' },
            { x: '03-11-2016 09:40:00', y: 3, xDataType: 'date', state: 'warning', notificationId: '', notificationType: '' },
            { x: '03-11-2016 10:40:00', y: 2, xDataType: 'date', state: 'normal', notificationId: '', notificationType: '' },
            { x: '03-11-2016 11:10:00', y: 5, xDataType: 'date', state: 'error', notificationId: '', notificationType: '' },
            { x: '03-11-2016 12:00:00', y: 5, xDataType: 'date', state: 'normal', notificationId: '', notificationType: '' },
            ]}
          xScaleTimeLineData={[
            { x: '03-12-2016 01:00:00' },
            { x: '03-12-2016 02:00:00' },
            { x: '03-12-2016 03:00:00' },
            { x: '03-12-2016 04:00:00' },
            { x: '03-12-2016 05:00:00' },
            { x: '03-12-2016 06:00:00' },
            { x: '03-12-2016 07:00:00' },
            { x: '03-12-2016 08:00:00' },
            { x: '03-12-2016 09:00:00' },
            { x: '03-12-2016 10:00:00' },
            { x: '03-12-2016 11:00:00' },
            { x: '03-12-2016 12:00:00' },
            ]}
          xDataType="date"
          yMax={12}
          tooltipVisible={false}
          dotVisible={false}
          hideYAxis={true}
          hideXAxis={true}
          hideXGrid={true}
          hideYGrid={true}
          strokeDasharray="20, 20"
          strokeWidth="3"
          strokeColor="#C3C4C6"
        />
        <div className="hacking-x-axis-background"></div>
      </div>