import React, { Component } from "react"
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native"

class ListItem extends Component {
  render() {
    const { title } = this.props

    if (!title) return null

    return (
      <View style={containerStyles.root}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          {this.props.isSkeleton ? (
            <View style={containerStyles.skeleton}>
              <Text
                style={[containerStyles.text, containerStyles.skeletonText]}
              >
                {title}
              </Text>
              {this.props.description ? (
                <Text style={containerStyles.skeletonText}>
                  {this.props.description}
                </Text>
              ) : null}
            </View>
          ) : (
            <View style={containerStyles.item}>
              <Text style={containerStyles.text}>{title}</Text>
              {this.props.description ? (
                <Text>{this.props.description}</Text>
              ) : null}
            </View>
          )}
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const containerStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    elevation: 1,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12,
    margin: 10,
  },
  skeleton: {
    height: 200,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006eff",
    borderRadius: 12,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
  skeletonText: {
    color: "white",
  },
})

export default ListItem
