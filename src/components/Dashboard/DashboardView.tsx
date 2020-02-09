import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Dashboard.css';
import { IDashboardViewProps } from './Dashboard.types';

const chartOptions = {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Minutes'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Date'
      }
    }]
  },
  maintainAspectRatio: false
}

export default class DashboardView extends React.Component<IDashboardViewProps, any> {
  constructor(props: any) {
    super(props);
  }

  renderGraph(labels: string[], data: number[], title: string) {
    const graphData: any = {
        labels: labels,
        datasets: [
          {
            label: title,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: data
          }
        ]
      };
      return (
        <Col className='graph' xs={6} sm={6} md={6} lg={6}>
            <Line
                data={graphData}
                height={300}
                options={chartOptions} />
        </Col>
      );
  }

  render() {
    return (
      <div style={{ paddingTop: '15px' }}>
          <Grid fluid>
              <Row>
                {this.props.ListGraphData.map(graphData => 
                    (this.renderGraph(graphData.labels, graphData.data, graphData.title))
                )}
              </Row>
          </Grid>
        
      </div>
    );
  }
}