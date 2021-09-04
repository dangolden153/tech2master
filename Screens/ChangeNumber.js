import React, { useState, useLayoutEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import tw from "tailwind-react-native-classnames";
const ChangeNumber = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [comfirmNewPassword, setcomfirmNewPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Change Number",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/* change number */}
      <View style={styles.ChangeNumber}>
        <Text style={styles.text}>change number</Text>
        <TextInput
          placeholderTextColor={"black"}
          style={styles.input}
          placeholder="Change Number"
          type="text"
          value={number}
          onChangeText={(text) => setNumber(text)}
          // secureTextEntry
        />

        <Button
          containerStyle={styles.btn}
          buttonStyle={{ backgroundColor: "#4285F4" }}
          title="Change Number"
          raised
          // onPress={() => navigateContext()}
        />
      </View>

      {/* change password */}

      <View style={styles.changePassword}>
        <Text style={styles.text}>change password</Text>
        <TextInput
          placeholderTextColor={"black"}
          style={styles.input}
          placeholder="existing Password"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TextInput
          placeholderTextColor={"black"}
          style={styles.input}
          placeholder="New Password"
          type="password"
          value={newPassword}
          onChangeText={(text) => setnewPassword(text)}
          secureTextEntry
        />

        <TextInput
          placeholderTextColor={"black"}
          style={styles.input}
          placeholder="Comfirm New Password"
          type="password"
          value={comfirmNewPassword}
          onChangeText={(text) => setcomfirmNewPassword(text)}
          secureTextEntry
        />
        <Button
          containerStyle={styles.btn}
          buttonStyle={{ backgroundColor: "#4285F4" }}
          title="Change Password"
          raised
          // onPress={() => navigateContext()}
        />
      </View>
    </View>
  );
};

export default ChangeNumber;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  btn: {
    width: 150,
    borderRadius: 50,
    marginTop: 20,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // backgroundColor: "orange",
  },
  ChangeNumber: { alignItems: "center", marginBottom: 50, marginTop: 20 },
  input: {
    width: 300,
    borderColor: "black",
    padding: 10,
    // backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 20,
  },
  changePassword: {
    alignItems: "center",
  },
});
