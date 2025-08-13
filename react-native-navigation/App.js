import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoritesScreen from "./screens/FavoritesScreen";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DrawerScreen" component={DrawerNavigator} options={{headerShown: false}} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}  />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
            title: "About the Meal",
            headerRight: () => {
              return <Button title="Tap me!" />
            }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
