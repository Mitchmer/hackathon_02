import React, { Component } from 'react';
import NavBar from './NavBar';
import {
  Header,
  Container,
  Divider,
  Segment,
  Grid,
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class About extends Component {
  render () {
    return (
      <div>
        <Container class="ui container" >
          <br/>
          <Header as="h1" textAlign="center">About Us</Header>
        </Container>
        <Segment>
          <Header as="h4" textAlign="Left">Basic Info</Header>
            <div >
              565 E 2100 S 
            <br/>
              Salt Lake City, UT 84106
            <br/>
              (801) 268-3374
            <br/>
              Open: Wednesday - Sunday 11am - 9pm
            <br/>
              Closed: Monday & Tuesday
            </div>
              <br/>
              <a href="https://www.google.com/maps/place/565+Firehouse/@40.7256923,-111.8769849,17z/data=!3m1!4b1!4m5!3m4!1s0x87528ab9882e4d53:0xf67f854b36163cf6!8m2!3d40.7256923!4d-111.8747962" >
                Directions
              </a>
        </Segment>
        <Segment>
          <Header as="h4">Upcoming Events</Header>
        </Segment>
        <Segment>
          <Header as="h4">Follow Us</Header>
          <a href="https://twitter.com/BubbasFirehouse">
            <img src="../images/twitter.png" alt="twitter" width="50" height="50"/>
          </a>
          <a href="https://www.yelp.com/search?find_desc=bubba%27s+Firehouse+BBQ&find_loc=Highland%2C+UT&ns=1">
            <img src="../images/yelp.png" alt="yelp" width="50" height="50" />
          </a>
        </Segment>
      </div>
    )
  }
}

export default About;
