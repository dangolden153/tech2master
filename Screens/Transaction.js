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
import {
  EvilIcons,
  AntDesign,
  Fontisto,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import loader from "../images/loader1.gif";

const Transaction = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (
      //   <TouchableOpacity style={{ marginLeft: 15 }}>
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
      <View>
        <ScrollView
          style={{ marginTop: 100 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {/*for each box container  */}
          <View
            style={{
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 100,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                width: 130,
              }}
            >
              Card Name
            </Text>
          </View>

          {/*for each box container  */}
          <View
            style={{
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 100,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                width: 130,
              }}
            >
              Request Type
            </Text>
          </View>

          {/*for each box container  */}
          <View
            style={{
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 100,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                width: 130,
                textAlign: "center",
              }}
            >
              Transaction Date
            </Text>
          </View>

          {/*for each box container  */}
          <View
            style={{
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 100,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                width: 130,
                textAlign: "center",
              }}
            >
              Amount
            </Text>
          </View>

          {/* /////////////////////// */}
          <View
            style={{
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 100,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                width: 130,
                textAlign: "center",
              }}
            >
              Staus
            </Text>
          </View>

          {/* ///////////////////////////// */}

          <View
            style={{
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 100,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                width: 130,
                textAlign: "center",
              }}
            >
              Action
            </Text>
          </View>
        </ScrollView>

        <View
          style={{
            height: 1,
            width: "85%",
            marginTop: 30,
            marginBottom: 15,
            backgroundColor: "#d6d6d6",
            alignSelf: "center",
          }}
        />

        <Text style style={{ fontSize: 18, textAlign: "center" }}>
          You have no existing Transactions
        </Text>
      </View>

      <Image
        source={loader}
        style={{
          height: 200,
          width: 200,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  transaction: {
    alignItems: "center",
    paddingTop: 20,
  },
});
