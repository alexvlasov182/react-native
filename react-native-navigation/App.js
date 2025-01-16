import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  console.log("App");
  return <CategoriesScreen />;
}

const styles = StyleSheet.create({});
