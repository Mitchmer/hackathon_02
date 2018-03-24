import React from 'react';
import { connect } from 'react-redux';
import TableBody, { Header, Container, Table, Image, Button, Segment, Divider} from 'semantic-ui-react';
import Order from './Order';
import { getItems } from '../actions/items';

class RealMenu extends React.Component {
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
      <Segment inverted textAlign='center' style={{
        backgroundImage: `url(images/bubba.jpg)`, backgroundSize: " cover ", minHeight: 700, padding: '1em 0em' }} vertical>
        <Container textAlign="center">
          
          <Table collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          
            {items.map( item =>
              <Table.Body key={item.id}>
                <Table.Row>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>${item.price}</Table.Cell>
                </Table.Row>
              </Table.Body>
            )}
          </Table>
        </Container>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}


export default connect(mapStateToProps)(RealMenu);
