import React from 'react'
import { ScrollView, Button, Image, View, Alert, Text, ART } from 'react-native'
import { Images } from '../Themes'
import NavItems from '../Navigation/NavItems'
// Styles
import styles from './Styles/LaunchScreenStyles'
import Draw from '../Components/Draw'

const {
  Surface,
  Group,
  Shape,
} = ART

const d = []

export default class CreateGameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d: '', height: 500, width: 500 }
  }

  setPosition = (event) => {
    if(d.length === 0) {
      d.push(`M${event.nativeEvent.pageX}, ${event.nativeEvent.pageY}`)
    }

    d.push(`${event.nativeEvent.pageX}, ${event.nativeEvent.pageY}`)
    const path = d.join(' ')

    this.setState({ 
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY,
      d: path
    })
  }

  _onStartShouldSetResponder = (e) => {
    this.dragging = true;
    //Setup initial drag coordinates
    this.drag = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY
    }
    return true;
  }

  _setDimensions = (layout) => {
    var {x, y, width, height} = layout;
    this.setState({...this.state, width: width, height: height})
  }

  render () {
    return (
      <View style={styles.MainContainer} >
        <View style={ styles.MainContainer } 
          onResponderMove={ this.setPosition }
          onStartShouldSetResponder={this._onStartShouldSetResponder}
          onLayout={(event) => {
            this._setDimensions(event.nativeEvent.layout)
          }}
        >
          { Draw(this.state.d, this.state.width, this.state.height) }
        
        </View>

      </View>
    )
  }
}
