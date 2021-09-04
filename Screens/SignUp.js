import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Context } from "../context";
// import pics from "../images/login.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "../firebase";

const TechMartSignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setcComfirmPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#F64B29" },
      headerTitleStyle: { color: "white" },
      title: "Sign ",
      headerShown: false,
    });
  }, [navigation]);

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        // navigation.navigate("drawer");
      })
      .catch((err) => console.log(err));
  };

  // {Platform.OS ? "padding" : "height"}
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.contBackground}>
        <KeyboardAvoidingView
          style={styles.contBackgroundAvoidingVIew}
          //   keyboardVerticalOffset={90}
        >
          {/* <ScrollView> */}
          <MaterialCommunityIcons
            name="account-multiple-plus-outline"
            size={54}
            color="black"
          />
          <Text
            h3
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 30,
              letterSpacing: 1,
              fontWeight: "bold",
            }}
          >
            Signup to Tech2Mart
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Name"
              type="text"
              autoFocus
            />

            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={number}
              onChangeText={(text) => setNumber(text)}
              placeholder="Contact number"
              type="text"
              autoFocus
            />

            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={code}
              onChangeText={(text) => setCode(text)}
              placeholder="Referral code"
              type="text"
              autoFocus
            />
            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              type="email"
              autoFocus
            />

            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              placeholder="password"
              type="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />

            <TextInput
              placeholderTextColor={"black"}
              style={styles.input}
              value={comfirmPassword}
              onChangeText={(text) => setcComfirmPassword(text)}
              type="password"
              secureTextEntry
              placeholder="comfirm Password"
            />
          </View>

          <View style={styles.btnContainer}>
            <Button
              containerStyle={styles.btn}
              buttonStyle={{ backgroundColor: "#4285F4" }}
              title="Sign up"
              raised
              onPress={() => handleSignUp()}
            />

            <Text style={{ paddingTop: 20, fontSize: 16 }}>
              you already have an account?{" "}
              <Text
                style={{ color: "black" }}
                onPress={() => navigation.navigate("signin")}
              >
                Sign In
              </Text>
            </Text>
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default TechMartSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    position: "relative",
    alignItems: "center",
  },
  contBackground: {
    backgroundColor: "#C4C4C4",
    height: "100%",
    width: "100%",
    position: "absolute",
    // bottom: 200,
  },
  contBackgroundAvoidingVIew: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: "80%",
  },
  // input: {
  //   marginTop: 10,
  //   width: "100%",
  // },
  btn: {
    backgroundColor: "#F64B29",
    color: "black",
    width: 200,
    borderRadius: 20,
    marginTop: 25,
  },
  btnContainer: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
    fontSize: 19,
  },
});
