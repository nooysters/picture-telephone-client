import React from 'react'
import { ScrollView, Button, Image, View, Alert } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  
  render () {
    return (
      <View style={ styles.mainContainer }>
        <View style={ styles.section } >
          <ScrollView style={ styles.container }>
            <View style={ styles.groupContainer }>
              <Button title="New Game" onPress={  NavigationActions.newGame } />
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
 