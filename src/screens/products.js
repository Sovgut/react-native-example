import React, { Component } from "react"
import { StyleSheet, Platform, StatusBar, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Layout from "../components/UI/Layout"
import axios from "axios"
import List from "../components/UI/List"

class Products extends Component {
  state = { items: [] }

  async componentDidMount() {
    if (!this.props.route.params.categoryId) return null

    try {
      const response = await axios.get(
        `https://cassie-main-server.herokuapp.com/categories/${this.props.route.params.categoryId}/products`
      )
      console.log(response.data)
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
    const { items } = this.state

    if (!items) return null

    const preparedProducts = items.map((product) => ({
      ...product,
      onPress: () => this.props.navigation.push("ProductDetails", product),
    }))

    preparedProducts.push({
      id: "skeleton",
      title: "Add product",
      description: "Some description",
      isSkeleton: true,
      onPress: () =>
        this.props.navigation.push("AddProduct", {
          categoryId: this.props.route.params.categoryId,
          title: this.props.route.params.title,
        }),
    })

    return (
      <Layout>
        <ScrollView>
          <List
            items={preparedProducts}
            title={
              this.props.route.params.title
                ? this.props.route.params.title
                : null
            }
          />
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

export default Products
