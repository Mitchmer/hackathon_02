import React from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

class Order extends React.Component {
  state = { order: [] }

  componentDidMount() {
    this.props.dispatch(getItems())
  }

  render() {
    const { items } = this.props
    const { }
    return (
      <div>
          {items.map( item =>
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
          {order.map}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items, user: state.user.id }
}

export default connect(mapStateToProps)(Order)