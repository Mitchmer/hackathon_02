import React from 'react';
import { Header, Container, Image, Button, Segment, Divider } from 'semantic-ui-react';
import ajax from 'ajax';

class Menu extends Component {
  state = { name: '', price: '' }

  handleSubmit = (e) => {

  }

  items = () => {
    const { items } = this.props;
  }

  render() {
    const { name, price }

    return this.items.map(
      
    )
  }
}

export default Menu;