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
          <Header as="h2" textAlign="center">About Us</Header>
        </Container>
        <Segment>
          <Header as="h4" textAlign="Left">Basic Info</Header>
          <div >
          565 E 2100 S
          Salt Lake City, UT 84106
          (801) 268-3374
          Open: Wednesday - Sunday 11am - 9pm
          Closed: Monday & Tuesday
          </div>
          <a href="https://www.google.com/maps/place/565+Firehouse/@40.7256923,-111.8769849,17z/data=!3m1!4b1!4m5!3m4!1s0x87528ab9882e4d53:0xf67f854b36163cf6!8m2!3d40.7256923!4d-111.8747962" >
          Directions
          </a>
        </Segment>
        <Segment>
          <Header as="h4">Contact Us</Header>
        </Segment>
        <Segment>
          <Header as="h4">Upcoming Events</Header>
        </Segment>
        <Segment>
          <Header as="h4">Follow Us</Header>
          <img src="" alt="Girl in a jacket"/>
        </Segment>
      </div>
    )
  }
}

export default About;