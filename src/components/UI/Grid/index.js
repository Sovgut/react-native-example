import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import GridItem from "./Item"

class Grid extends Component {
  render() {
    const { items } = this.props

    if (!items) return null

    return (
      <View style={containerStyles.root}>
        <ScrollView>
          {this.props.title ? (
            <Text style={containerStyles.title}>{this.props.title}</Text>
          ) : null}

          <View style={containerStyles.content}>
            {items.map((item) =>
              item.render ? item.render() : <GridItem {...item} key={item.id} />
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const containerStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
})

export default Grid
