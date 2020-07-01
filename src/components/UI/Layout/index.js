import React, { Component } from "react"
import Navigation from "../Navigation"
import { View, StyleSheet, Platform, StatusBar, Text } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"

class Layout extends Component {
  render() {
    return (
      <View style={layoutStyles.root}>
        <View style={layoutStyles.content}>{this.props.children}</View>
        <View>
          <Text>Tap me</Text>
        </View>
        <Navigation />
      </View>
    )
  }
}

const layoutStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    paddingBottom: 50,
  },
})

export default Layout
