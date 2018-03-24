import React from 'react';
import { connect } from 'react-redux';
import TableBody, { Header, Container, Table, Image, Button, Segment, Divider } from 'semantic-ui-react';
import Order from './Order';
import { getItems } from '../actions/items';

class Menu extends React.Component {
  state = { name: '', price: 0 }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.additem(this.state.name)
    this.setState({ name: '', price: ''})
  }

  componentDidMount() {
    this.props.dispatch(getItems())
  }

  
  items = () => {
    const { items } = this.props
  }
  
  render() {

    const { items } = this.props
    return (
      <Container textAlign="center">
        
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Add To Cart</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        
          {items.map( item =>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>${item.price}</Table.Cell>
                <Table.Cell><Button value="submit" color="green">Add To Cart</Button></Table.Cell>
              </Table.Row>
            </Table.Body>
          )}
        </Table>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}


export default connect(mapStateToProps)(Menu);
