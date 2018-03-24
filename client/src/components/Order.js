import React from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

class Order extends React.Component {
  state = { order: [] }

  render() {
    const { items } = this.props
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
              <Divider />
            </List>
          )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items, user: state.user.id }
}

export default connect(mapStateToProps)(Order)