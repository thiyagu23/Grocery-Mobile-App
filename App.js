import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import Search from "./Screens/Search";
// import Table from "./Screens/Table";
// import Otp from "./components/Authentication/Otp";
// import Splash from "./components/index";
import Main from "./Main";
import WalkThrough from "./components/splash/WalkThrough";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Cart from "./Screens/Cart";
import Drawer from "./Drawer";
import Address from "./Screens/Profiles/Address";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <WalkThrough />
      </NavigationContainer>
    </Provider>
  );
}
