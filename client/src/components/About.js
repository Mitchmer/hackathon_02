import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        </Segment>
        <Segment>
          <Header as="h4">Contact Us</Header>
        </Segment>
        <Segment>
          <Header as="h4">Upcoming Events</Header>
        </Segment>
        <Segment>
          <Header as="h4">Follow Us</Header>
        </Segment>
      </div>
    )
  }
}

export default About;