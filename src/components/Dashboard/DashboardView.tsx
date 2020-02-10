import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Dashboard.css';
import { IDashboardViewProps } from './Dashboard.types';

const chartOptions = {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Minutes'
      },
      ticks: {
        beginAtZero: true
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

  renderGraph(labels: string[], data: number[], title: string) {
    const graphData: any = {
        labels: labels,
        datasets: [
          {
            label: title,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.6)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: data
          }
        ]
      };
      return (
        <Col className='graph' xs={6} sm={6} md={6} lg={6}>
            <Bar
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