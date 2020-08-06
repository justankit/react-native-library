import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Home = ({ navigation, count, update }) => {
  console.log("count", count);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          marginTop: 10,
          padding: 15,
          borderRadius: 10,
          backgroundColor: "lightblue",
        }}
        onPress={() => navigation.navigate("About")}
      >
        <Text>Go To About Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 10,
          padding: 15,
          borderRadius: 10,
          backgroundColor: "lightred",
        }}
        onPress={() => update(count)}
      >
        <Text>Update Count</Text>
      </TouchableOpacity>
      <Text>Count: {count}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return { count: state.home.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (c) => dispatch({ type: "UPDATE_COUNT", payload: c }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
