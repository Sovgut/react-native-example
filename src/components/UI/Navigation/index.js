import React, { Component } from "react"
import { View, StyleSheet, Dimensions, Text, StatusBar } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import {
  faListAlt,
  faWallet,
  faShoppingCart,
  faHome,
  faQuestion,
  faFile,
  faCube,
} from "@fortawesome/free-solid-svg-icons"
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler"

class Navigation extends Component {
  state = {
    touchVerticalPoint: 50,
    isOpen: false,
  }

  onTouch = (e) => {
    if (e.nativeEvent.pageY <= this.state.touchVerticalPoint) {
      this.setState({ isOpen: true, touchVerticalPoint: e.nativeEvent.pageY })
    } else {
      this.setState({ isOpen: false, touchVerticalPoint: e.nativeEvent.pageY })
    }
  }

  onClose = () => {
    this.setState({
      touchVerticalPoint: 50,
      isOpen: false,
    })
  }

  onPress = (target) => {
    console.log(target)
  }

  render() {
    const { isOpen } = this.state
    const styles = [navigationStyles.drawer]

    if (isOpen) styles.push({ bottom: Dimensions.get("window").height - 400 })

    return (
      <View style={navigationStyles.root}>
        {this.state.isOpen ? (
          <View style={navigationStyles.backdrop}>
            <TouchableWithoutFeedback
              onPress={this.onClose}
              style={navigationStyles.backdropTouchable}
            />
          </View>
        ) : null}
        <View style={styles}>
          <ScrollView style={navigationStyles.list}>
            {[
              "History",
              "Support",
              "Section 1",
              "Section 2",
              "Section 3",
              "Section 4",
              "Section 5",
              "Section 6",
              "Section 7",
              "Section 8",
              "Section 9",
              "Section 10",
            ].map((item) => (
              <View key={item} style={navigationStyles.listItem}>
                <FontAwesomeIcon
                  onPress={() => this.onPress("Home")}
                  size={24}
                  style={{ marginRight: 12 }}
                  icon={faCube}
                />
                <Text style={navigationStyles.listItemContent}>{item}</Text>
              </View>
            ))}
          </ScrollView>
          <View
            style={navigationStyles.labelContainer}
            onTouchMove={this.onTouch}
          >
            <View style={navigationStyles.label} />
          </View>
          <View style={navigationStyles.header}>
            <FontAwesomeIcon
              onPress={() => this.onPress("Home")}
              size={32}
              icon={faHome}
            />
            <FontAwesomeIcon
              onPress={() => this.onPress("Goods")}
              size={32}
              icon={faListAlt}
            />
            <FontAwesomeIcon
              onPress={() => this.onPress("Wallet")}
              size={32}
              color="#006eff"
              icon={faWallet}
            />
          </View>
        </View>
      </View>
    )
  }
}

const navigationStyles = StyleSheet.create({
  root: {
    position: "absolute",
    height: Dimensions.get("screen").height,
    width: "100%",
  },
  backdrop: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.5,
    zIndex: 998,
  },
  backdropTouchable: {
    height: "100%",
    width: "100%",
  },
  drawer: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    bottom: Dimensions.get("window").height - 100,
    height: Dimensions.get("window").height - 350,
    paddingTop: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    zIndex: 999,
  },
  labelContainer: {
    position: "absolute",
    alignSelf: "center",
    height: 30,
    bottom: -15,
    width: "100%",
    backgroundColor: "transparent",
  },
  label: {
    borderRadius: 20,
    position: "absolute",
    alignSelf: "center",
    bottom: 5,
    width: 50,
    height: 5,
    backgroundColor: "whitesmoke",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "whitesmoke",
  },
  list: {},
  listItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 10,
  },
  listItemContent: {
    fontWeight: "bold",
  },
})

export default Navigation
