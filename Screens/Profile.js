import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { Input, Button } from "react-native-elements";

import Pics from "../images/techMart.jpg";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#3C93D4",
          flexDirection: "row",
          padding: 25,
          marginBottom: 70,
          alignItems: "center",
        }}
      >
        <Image
          source={Pics}
          style={{ height: 100, width: 100, borderRadius: 100 }}
        />
        <View style={{ marginLeft: 30, fontSize: 17 }}>
          <Text>Total Transaction: </Text>
          <Text>Referral Code: </Text>
        </View>

        <View></View>
      </View>

      {/* //////// Request redrawal */}
      <View>
        <View
          style={{
            backgroundColor: "#3C93D4",
            flexDirection: "row",
            padding: 15,
            paddingHorizontal: 80,
            // marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              N {""} 0
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>Wallet </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              0
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>Reward Tokens </Text>
          </View>
        </View>

        {/* down seection of the Request tokens */}
        <View
          style={{
            backgroundColor: "grey",
            flexDirection: "row",
            padding: 15,
            paddingHorizontal: 80,
            // marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              N {""} 0
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>Wallet </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              0
            </Text>
            <Text style={{ color: "white", fontSize: 18 }}>Reward Tokens </Text>
          </View>
        </View>
      </View>

      <Button
        title="Change Number"
        raised
        containerStyle={styles.btn}
        buttonStyle={{ backgroundColor: "#4285F4" }}
        onPress={() => navigation.navigate("number")}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    // alignItems: "center",
    // width: "100%",
  },
  btn: {
    width: 200,
    marginTop: 20,
    alignSelf: "center",
    // padding: 0,
    borderRadius: 40,
  },
});
