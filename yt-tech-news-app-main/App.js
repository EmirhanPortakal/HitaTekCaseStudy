import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from "./screens/SearchScreen";
import { Entypo,FontAwesome } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (

        <NavigationContainer>
            {/* <Drawer.Navigator screenOptions={{
                tabBarActiveTintColor: "black"
            }}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () =><Entypo name="home" size={24} color="black" />
                }}/>
                <Drawer.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: () =><FontAwesome name="search" size={24} color="black" />
                }}/>
            </Drawer.Navigator> */}
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Search" component={SearchScreen} />
            </Tab.Navigator>
           {/* <MyDrawer /> */}
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
