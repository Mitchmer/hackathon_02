import { React, Component } from 'react';
import { Header, Container, Card, Image, Button, Segment, Divider } from 'semantic-ui-react';


class Menu extends Component {
  state = { name: '', price: '' }

  handleSubmit = (e) => {

  }

  items = () => {
    const { items } = this.props;

    return items.map( item =>
      <Card key={item.id}>
      <Image src={`../public/food.jpeg`} />
      <Card.Content>
        <Card.Header>
          {item.name}
        </Card.Header>
        <Card.Meta>
          {item.price}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button >Add To Cart</Button>
      </Card.Content>
    </Card>
    )
  }

  render() {
    // const { name, price } = this.state;
    return (
      <Container>
        <Card.Group itemsPerRow={4} >
          { this.items() }
        </Card.Group>

      </Container>
      
    )
  }
}

export default Menu;