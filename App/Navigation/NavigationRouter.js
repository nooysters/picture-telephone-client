import React, { Component } from 'react'
import { Scene, Router, Reducer } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import CustomNavBar from './CustomNavBar'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import CreatGameScreen from '../Containers/CreateGameScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/
const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene initial={true} key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar/>
          <Scene key='newGame' component={CreatGameScreen} title='Create New Game' hideNavBar={false} />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
