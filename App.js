import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./components/index";
// import Main from "./Main";
import WalkThrough from "./components/splash/WalkThrough";
export default function App() {
  return (
    <NavigationContainer>
      <WalkThrough />
    </NavigationContainer>
  );
}
