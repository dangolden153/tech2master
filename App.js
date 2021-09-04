import { StatusBar } from "expo-status-bar";
import React, { createContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import TechMartSignUp from "./Screens/SignUp";
import TechMartSignIn from "./Screens/SignIn";
import ForgotPassword from "./Screens/ForgotPassword";
import DashBoard from "./Screens/DashBoard";
import Transaction from "./Screens/Transaction";
import Rate from "./Screens/Rate";
import Profile from "./Screens/Profile";
import DrawerScreen from "./Screens/DrawerScreen";
import { DrawerContent } from "./components/DrawerContent";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import pics from "./images/techMart_logo.png";
import ChangeNumber from "./Screens/ChangeNumber";
import { useNavigation } from "@react-navigation/native";
import firebase from "./firebase";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/////// top logo img
const UserView = () => {
  return (
    <View
      style={{
        // top: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={pics}
        style={{ height: 130, width: 130, resizeMode: "contain" }}
      />
    </View>
  );
};

/////////////////to display the drawerContent item
function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ flex: 1 }}>
      <UserView />

      <DrawerContentScrollView style={{ paddingLeft: 20 }} {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <DrawerItem
        style={{ paddingLeft: 20, marginBottom: 20 }}
        onPress={() => handleLogOut()}
        label="Logout"
        labelStyle={{ fontSize: 20 }}
        icon={({ size, color }) => <AntDesign name="logout" size={30} />}
      />
    </View>
  );
}

///////////////custom drawer screen
const CustomDrawer = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: "center",
        drawerStyle: {
          backgroundColor: "#424C66",
        },
      }}
    >
      <Drawer.Screen
        name="dashboard"
        component={DashBoard}
        options={{
          title: "Dashboard",
          drawerLabelStyle: { fontSize: 20, marginLeft: -10, color: "white" },
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={30}
              color="white"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Transaction"
        component={Transaction}
        options={{
          title: "Transaction",
          drawerLabelStyle: { fontSize: 20, marginLeft: -10, color: "white" },
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="card-giftcard" size={30} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="Rate"
        component={Rate}
        options={{
          title: "Rate",
          drawerLabelStyle: { fontSize: 20, marginLeft: -10, color: "white" },
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name="exchange" size={30} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          drawerLabelStyle: { fontSize: 20, marginLeft: -10, color: "white" },
          drawerIcon: ({ focused, size }) => (
            <AntDesign name="user" size={30} color="white" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

///////////////////  App function
export default function App() {
  const [isloggedIn, setIsloggedIn] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        setIsloggedIn(true);
        console.log("we are now authenticated", user);
      }

      ///do other thing
      else {
        setIsloggedIn(false);
        console.log("not authenticated");
      }
    });
  }, [setIsloggedIn]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signin"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        {isloggedIn ? (
          <>
            <Stack.Screen
              name="drawer"
              component={CustomDrawer}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="signin" component={TechMartSignIn} />

            <Stack.Screen name="signup" component={TechMartSignUp} />

            <Stack.Screen name="number" component={ChangeNumber} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
