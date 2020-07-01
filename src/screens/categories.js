import React, { Component } from "react"
import { StatusBar, StyleSheet, Platform, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Grid from "../components/UI/Grid"
import axios from "axios"
import Layout from "../components/UI/Layout"

class Categories extends Component {
  state = { items: [] }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://cassie-main-server.herokuapp.com/categories"
      )
      if (response.data.success) {
        this.setState({
          items: response.data.content,
        })
      } else {
        throw new Error(response.data.error)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    const preparedCategories = this.state.items.map((category) => ({
      ...category,
      onPress: () =>
        this.props.navigation.push("Products", {
          categoryId: category.id,
          title: category.title,
        }),
    }))

    return (
      <Layout>
        <ScrollView>
          <Grid items={preparedCategories} />
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
})

export default Categories
