import React, { useLayoutEffect } from "react";
import { StatusBar } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import loader from "../images/loader.gif";
// import {
//   toggleDrawer
// } from "@react-navigation/drawer";

const Rate = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (
      //   <TouchableOpacity
      //     style={{ marginLeft: 15 }}
      //     onPress={navigation.toggleDrawer()}
      //   >
      //     <EvilIcons name="navicon" size={30} color="black" />
      //   </TouchableOpacity>
      // ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 15 }}>
          <FontAwesome name="envelope-o" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.transaction}>
        {/* <CheckBox center title="click here" checkIcon="circle-o" /> */}
        <Text>Show Deleted Threads</Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Transactions</Text>
        <Text>CHAT NOT FOUND</Text>
        <Text style={{ fontSize: 16 }}>this conversation has been close</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "#424C66",
            justifyContent: "space-between",
            alignItems: "center",
            // flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            margin: 10,
            marginTop: 50,
            marginLeft: 30,
            width: "25%",
            flexGrow: 0.9,
            height: "70%",
            color: "white",
            flexDirection: "column",
          }}
        >
          <Text style={styles.text}>Card Name</Text>
          <Text style={styles.text}>Card Type</Text>
          <Text style={styles.text}>Card Currency</Text>
          <Text style={styles.text}>Card Range</Text>
          <Text style={styles.text}>Card Rate</Text>
        </View>
        <Image
          source={loader}
          style={{ height: 200, width: 200, resizeMode: "contain" }}
        />
      </View>
      {/* <Link /> */}
    </SafeAreaView>
  );
};

export default Rate;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  transaction: {
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
