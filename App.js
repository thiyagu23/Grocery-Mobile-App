import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./components/index";
// import Main from "./Main";

export default function App() {
  return (
    <NavigationContainer>
      <Splash />
    </NavigationContainer>
  );
}
