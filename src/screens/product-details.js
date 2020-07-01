import React, { Component } from "react"
import { Text, View, StyleSheet, StatusBar, Platform } from "react-native"
import Layout from "../components/UI/Layout"
import { ScrollView } from "react-native-gesture-handler"

class ProductsDetails extends Component {
  render() {
    const { title, description } = this.props.route.params

    return (
      <Layout>
        <View style={containerStyles.header}>
          <Text style={containerStyles.title}>{title}</Text>
          <Text>{description}</Text>
        </View>
        <ScrollView style={containerStyles.content}>
          <View style={containerStyles.details}></View>
        </ScrollView>
      </Layout>
    )
  }
}

const containerStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  content: {
    height: "100%",
    position: "absolute",
    zIndex: 999,
    top: StatusBar.currentHeight,
    left: 0,
    width: "100%",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    overflow: "hidden",
  },
  details: {
    backgroundColor: "white",
    padding: 20,
    height: 800,
    marginTop: 300,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  line: {
    marginBottom: 12,
  },
  lineTitle: {
    fontSize: 24,
  },
  lineValue: {},
})

export default ProductsDetails
