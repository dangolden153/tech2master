import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "../firebase";

const TechMartSignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      .then((response) => console.log(response))
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
          <Entypo
            name="lock-open"
            size={54}
            color="black"
            style={{ marginBottom: 20 }}
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
            Sign in to Tech2Mart
          </Text>
          <View style={styles.inputContainer}>
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
          </View>

          <View style={styles.btnContainer}>
            <Button
              containerStyle={styles.btn}
              buttonStyle={{ backgroundColor: "#4285F4" }}
              title="Login"
              raised
              onPress={() => handleSignUp()}
            />

            <Text style={{ paddingTop: 20, fontSize: 16 }}>
              Forgot password?{" "}
              <Text
                style={{ color: "black" }}
                // onPress={() => navigation.navigate("signin")}
              >
                Reset
              </Text>
            </Text>

            <Text style={{ paddingTop: 20, fontSize: 16 }}>
              Don't have an account?{" "}
              <Text
                style={{ color: "black" }}
                onPress={() => navigation.navigate("signup")}
              >
                Sign up
              </Text>
            </Text>
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default TechMartSignIn;

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
