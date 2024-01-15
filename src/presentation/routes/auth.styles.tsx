import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

export const StackAuthStyles = ({ route }: any): NativeStackNavigationOptions => ({
  headerShown: false,
  headerShadowVisible: false,
  headerTitleAlign: "center",
  headerTitle: "",
});