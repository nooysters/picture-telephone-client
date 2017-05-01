import React from 'react'
import { ScrollView, Button, Image, View, Alert, Text, ART } from 'react-native'
import { Images } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/DrawingViewStyles'
import Draw from '../Components/Draw'

const {
  Surface,
  Group,
  Shape,
} = ART

var d = []


export default class CreateGameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d: '', height: 500, width: 500, paths: [] }
  }

  setPosition = (event) => {
    d.push(`${event.nativeEvent.pageX}, ${event.nativeEvent.pageY}`)
    const path = d.join(' ')

    this.setState({ 
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY,
      d: path
    })
  }

  _clearAll = () => {
    this.setState({...this.state, d: ''})
    d = []
  }

  _onStartShouldSetResponder = (e) => {
    this.dragging = true;
    //Setup initial drag coordinates
    this.drag = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY
    }

    d.push(`M${e.nativeEvent.pageX}, ${e.nativeEvent.pageY}`)
    
    return true;
  }

  _setDimensions = (layout) => {
    var {x, y, width, height} = layout;
    this.setState({...this.state, width: width, height: height})
  }

  render () {
    return (
      <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
      }} >
        <View style={ styles.container }
          onResponderMove={ this.setPosition }
          onStartShouldSetResponder={this._onStartShouldSetResponder}
          onLayout={(event) => {
            this._setDimensions(event.nativeEvent.layout)
          }}
        >
          { Draw(this.state.d, this.state.width, this.state.height) }
        </View>
        <View style={styles.buttonBar}>
          <Button title="Clear" onPress={this._clearAll} color="#000" />
        </View>
      </View>
    )
  }
}
