import React from 'react';
import './About.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'react-flexbox-grid';
import Grid from '@material-ui/core/Grid';

const style = {
  cardRoot: {
    width: 420,
    minHeight: 150,
  },
  title: {
    fontSize: 20,
    paddingBottom: 6
  },
  purposeTitle: {
      fontSize: 20,
      padding: 10
  }
};


const About = () => {
  return (
    <div className='about'>
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{ paddingTop: '25px' }}
        >
            <Grid item xs={9}>
                <Card>
                    <CardContent>
                        <Typography style={style.purposeTitle} color='textSecondary' gutterBottom>
                        This is a web application to keep track of how many minutes you spend reading on various books.
                        <br></br>Given the theme of education and classroom technology, along with the fact that I am trying to read more myself, this idea seemed like a good fit.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>      
        </Grid>

      <h3 style={{paddingTop: 10, fontSize: '28px', color: 'rgba(0, 0, 0, 0.54)' }}>Technology and Skills Demonstrated</h3>
      <Grid>
        <Row>
            <Col className={'card-column'} lg={4}>
                <Card style={style.cardRoot}>
                    <CardContent>
                        <Typography style={style.title} color='textSecondary' gutterBottom>
                        ReactJS and Typescript
                        </Typography>
                        <Typography variant='body2' component='p'>
                        Utilized React and Typescript to create the single page Javascript application.
                        </Typography>
                    </CardContent>
                </Card>
            </Col>

            <Col className={'card-column'} lg={4}>
                <Card style={style.cardRoot}>
                        <CardContent>
                            <Typography style={style.title} color='textSecondary' gutterBottom>
                            Firebase
                            </Typography>
                            <Typography variant='body2' component='p'>
                            Utilized Google's Firebase Cloud Firestore to store data and perform CRUD operations.
                            </Typography>
                        </CardContent>
                    </Card>
            </Col>

            <Col className={'card-column'} lg={4}>
                <Card style={style.cardRoot}>
                        <CardContent>
                            <Typography style={style.title} color='textSecondary' gutterBottom>
                            Unit Testing and Snapshot Testing
                            </Typography>
                            <Typography variant='body2' component='p'>
                            Wrote unit tests and snapshot tests for the React components using Jest and Enzyme. Demonstrated separation of concerns in components.
                            </Typography>
                        </CardContent>
                    </Card>
            </Col>

            <Col className={'card-column'} lg={4}>
                <Card style={style.cardRoot}>
                        <CardContent>
                            <Typography style={style.title} color='textSecondary' gutterBottom>
                            Continuous Integration
                            </Typography>
                            <Typography variant='body2' component='p'>
                            Automated the tests to run on every commit using CirlceCI.
                            </Typography>
                        </CardContent>
                    </Card>
            </Col>

            <Col className={'card-column'} xs={6} sm={6} md={4} lg={4}>
                <Card style={style.cardRoot}>
                        <CardContent>
                            <Typography style={style.title} color='textSecondary' gutterBottom>
                            Deployment
                            </Typography>
                            <Typography variant='body2' component='p'>
                            Deployed the app via Heroku.
                            </Typography>
                        </CardContent>
                    </Card>
            </Col>

            <Col className={'card-column'} lg={4}>
                <Card style={style.cardRoot}>
                        <CardContent>
                            <Typography style={style.title} color='textSecondary' gutterBottom>
                            Git
                            </Typography>
                            <Typography variant='body2' component='p'>
                            Utilized Git & Github for source control. <a target='_blank' rel='noopener noreferrer' href='https://github.com/millro04/reading_tracker'>Click here to view the repo.</a>
                            </Typography>
                        </CardContent>
                    </Card>
            </Col>

        </Row>
      </Grid>

      <h4>Thank you!</h4>
    
    </div>
  );
}

export default About;