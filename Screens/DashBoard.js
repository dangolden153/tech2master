import { StatusBar } from "expo-status-bar";
import { CheckBox } from "native-base";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  EvilIcons,
  AntDesign,
  Fontisto,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

const DashBoard = ({ navigation }) => {
  // const isDrawerOpen = useDrawerStatus();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (
      //   <TouchableOpacity style={{ marginLeft: 15 }} onPress={isDrawerOpen}>
      //     <EvilIcons name="navicon" size={30} color="black" />
      //   </TouchableOpacity>
      // ),
      // title: "dash",
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
          style={{ marginTop: 40 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {/*for each box container  */}
          <View
            style={{
              backgroundColor: "#d6d6d6",
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 140,
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
              Wallet Amount
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // margin: 5,
              }}
            >
              <AntDesign name="home" size={30} color="#3C93D4" />
              <Text style={{ marginLeft: 8, fontSize: 17, color: "#3C93D4" }}>
                0 {""} N
              </Text>
            </View>
          </View>

          {/*for each box container  */}
          <View
            style={{
              backgroundColor: "#d6d6d6",
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 140,
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
              Reward Tokens
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // margin: 5,
              }}
            >
              <AntDesign name="wallet" size={30} color="#3C93D4" />
              <Text style={{ marginLeft: 8, fontSize: 17, color: "#3C93D4" }}>
                0
              </Text>
            </View>
          </View>

          {/*for each box container  */}
          <View
            style={{
              backgroundColor: "#d6d6d6",
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 140,
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
              Pending Transactions
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // margin: 5,
              }}
            >
              <Fontisto name="nav-icon-list-a" size={30} color="#3C93D4" />
              <Text style={{ marginLeft: 8, fontSize: 17, color: "#3C93D4" }}>
                0
              </Text>
            </View>
          </View>

          {/*for each box container  */}
          <View
            style={{
              backgroundColor: "#d6d6d6",
              padding: 20,
              margin: 10,
              alignItems: "center",
              height: 140,
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
              Completed Transactions
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // margin: 5,
              }}
            >
              <Ionicons name="checkmark-done" size={30} color="#3C93D4" />
              <Text style={{ marginLeft: 8, fontSize: 17, color: "#3C93D4" }}>
                0 /0
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* down section */}
        <View
          style={{
            marginLeft: 20,
            flexDirection: "column",
            height: "50%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              // marginVertical: 50,
            }}
          >
            <View
              style={{ backgroundColor: "#3C93D4", height: 35, width: 7 }}
            />
            <Text
              onPress={() => navigation.navigate("signin")}
              style={{ marginLeft: 15, fontSize: 20, color: "black" }}
            >
              Gift Cards
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              // marginVertical: 50,
            }}
          >
            <View
              style={{ backgroundColor: "#3C93D4", height: 35, width: 7 }}
            />
            <Text style={{ marginLeft: 15, fontSize: 20, color: "black" }}>
              Bitcoin Cards
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              // marginVertical: 50,
            }}
          >
            <View
              style={{ backgroundColor: "#3C93D4", height: 35, width: 7 }}
            />
            <Text style={{ marginLeft: 15, fontSize: 20, color: "black" }}>
              Last 10 Transactions
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  transaction: {
    alignItems: "center",
    marginTop: 15,
  },
});
