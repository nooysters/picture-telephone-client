import React, { PropTypes } from 'react'
import { View, Image, LayoutAnimation } from 'react-native'
import NavItems from './NavItems'
import styles from './Styles/CustomNavBarStyles'
import SearchBar from '../Components/SearchBar'
import { connect } from 'react-redux'
import { Metrics, Images } from '../Themes'

class CustomNavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }


  renderMiddle () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    return (
      <Image resizeMode='cover' style={styles.logo} source={Images.clearLogo} />
    )
  }

  renderRightButtons () {
    return (
      <View style={styles.rightButtons}>
        {NavItems.searchButton(this.showSearchBar)}
      </View>
    )
  }

  renderLeftButtons () {
    return (
      <View style={styles.leftButtons}>
        {NavItems.backButton()}
      </View>
    )
  }

  render () {
    let state = this.props.navigationState
    let selected = state.children[state.index]
    while (selected.hasOwnProperty('children')) {
      state = selected
      selected = selected.children[selected.index]
    }

    const containerStyle = [
      styles.container,
      this.props.navigationBarStyle,
      state.navigationBarStyle,
      selected.navigationBarStyle
    ]

    return (
      <View style={containerStyle}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

CustomNavBar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)
