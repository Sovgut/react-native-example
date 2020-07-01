import React, { Component } from "react"
import {
  StatusBar,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Layout from "../components/UI/Layout"
import axios from "axios"

class AddCategory extends Component {
  state = {
    inputs: {
      title: {
        validation: {
          required: true,
        },
        value: String(),
      },
      description: {
        validation: {
          required: true,
        },
        value: String(),
      },
    },
  }

  onInputChange = (e, type) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [type]: {
          ...this.state[type],
          value: e.nativeEvent.text,
        },
      },
    })
  }

  onButtonPressed = async () => {
    try {
      const response = await axios.post(
        "https://cassie-main-server.herokuapp.com/categories",
        {
          title: this.state.inputs.title.value,
          description: this.state.inputs.description.value,
        }
      )
      if (!response.data.success) {
        throw new Error(response.data.error)
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      this.props.navigation.push("Categories")
    }
  }

  render() {
    return (
      <Layout>
        <ScrollView>
          <View style={containerStyles.container}>
            <Text style={containerStyles.label}>Title</Text>
            <TextInput
              style={containerStyles.input}
              defaultValue={this.state.inputs.title.value}
              onChange={(e) => this.onInputChange(e, "title")}
            />
            <Text style={containerStyles.label}>Description</Text>
            <TextInput
              style={containerStyles.input}
              defaultValue={this.state.inputs.description.value}
              onChange={(e) => this.onInputChange(e, "description")}
            />
            <TouchableWithoutFeedback onPress={this.onButtonPressed}>
              <View style={containerStyles.button}>
                <Text style={{ color: "white" }}>Create category</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
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
  container: {
    padding: 20,
  },
  label: {
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 12,
    padding: 10,
  },
  button: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006eff",
    borderRadius: 12,
    margin: 10,
    marginTop: 50,
  },
})

export default AddCategory
