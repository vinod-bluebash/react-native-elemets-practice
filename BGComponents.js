import React from 'react'
import { View, Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'

export default class BGComponents extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex( selectedIndex ) {
    this.setState({selectedIndex})
  }

  render () {
    const component1 = () => <Text>One</Text>;
    const component2 = () => <Text>Two</Text>
    const component3 = () => <Text>Three</Text>
    
    const buttons = [{element: component1}, {element: component2}, {element: component3}]
    const { selectedIndex } = this.state
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}}
      />
    )
  }
}
