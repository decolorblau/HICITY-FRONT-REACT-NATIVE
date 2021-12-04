import React, { useEffect } from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
import { firebaseApp } from "./src/utils/firebase";
import * as firebase from "firebase/app";
import { StackNavigator } from "./src/navigation/StackNavigator";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
