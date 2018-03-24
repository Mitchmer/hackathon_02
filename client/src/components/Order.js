import React from 'react'
import { connect } from 'react-redux'
import { List, Header, Divider } from 'semantic-ui-react'
import { getItems } from '../actions/items';
import Menu from './Menu';

class Order extends React.Component {
  state = { order: [] }

  componentDidMount() {
    this.props.dispatch(getItems())
    debugger
  }

  render() {

    const { items } = this.props
    return (
      <div>
          {
            items.map( item =>
            <List>
              <List.Item>
                <Header as="h3">
                  {item.name}
                </Header>
                <Header as="h4">
                  {item.price}
                </Header>
              </List.Item>
              
            </List>
          )}
          <Divider />
          {/* {order.map} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(Order)