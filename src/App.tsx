import store from "./store";
import { Routes } from "./routes"
import { Provider } from "react-redux";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export function App() {
  return (
    <Provider store={store}>
      <SafeAreaView className={`flex-1 bg-WHITE_100`} >
        <NavigationContainer >
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor={"#FFFFFF"}
          />
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
