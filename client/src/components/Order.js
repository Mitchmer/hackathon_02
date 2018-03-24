import React from 'react';
import { connect } from 'react-redux';
import TableBody, { Header, Container, Table, Image, Button, Segment, Divider, Grid } from 'semantic-ui-react';
import { getItems } from '../actions/items';


class Order extends React.Component {
  state = { cart: [] }

  componentDidMount() {
    this.props.dispatch(getItems())
  }

  addItemToCart = (item) => {
    console.log(this.state.cart)
    this.setState({ cart: [ item, ...this.state.cart ]})
  }

  items = () => {
    const { items } = this.props
  }

  render() {

    const { items } = this.props
    return (
      <Container textAlign="center">
      <Grid divided>
        <Grid.Column>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Add To Cart</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            {items.map( item =>
              <Table.Body key={item.id}>
                <Table.Row>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>${item.price}</Table.Cell>
                  <Table.Cell><Button onClick={() => this.addItemToCart(item)} value="submit" color="green">Add To Cart</Button></Table.Cell>
                </Table.Row>
              </Table.Body>
            )}
          </Table>
        </Grid.Column>
        <Grid.Column>
          <Table striped>
            <Table.Header>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Header> 
            {this.state.cart.map( cartitem =>
              <Table.Body key={cartitem.id}>
                <Table.Row>
                  <Table.Cell>{this.state.cartitem.name}</Table.Cell>
                  <Table.Cell>${this.state.cartitem.price}</Table.Cell>
                </Table.Row>
              </Table.Body>
            )}
          </Table>
        </Grid.Column>
      </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(Order);
