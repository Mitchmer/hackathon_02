import React from 'react';
import { Header, Container, Image, Button, Segment, Divider } from 'semantic-ui-react';
import Order from './Order'

class Menu extends React.Component {
  state = { name: '', price: '' }

  handleSubmit = (e) => {

  }

  render() {
    return(
      <Order />
    )
  }
}


export default Menu;
