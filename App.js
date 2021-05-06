import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute, DrawerActions } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Tab2 from './screens/Tab2';
import Tab3 from './screens/Tab3';

const AppDrawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTabNavigator = createBottomTabNavigator();

const HomeScreen = ({ navigation, route }) => {
  return <Text>This is HomeScreen's profile</Text>;
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is ProfileScreen's profile</Text>;
};

const SettingsScreen = ({ navigation, route }) => {
  return <Text>This is SettingsScreen's profile</Text>;
};

const EditProfileScreen = ({ navigation, route }) => {
  return <Text>This is EditProfileScreen's profile</Text>;
};

export const TabNavigator = () => {
  return (
    <HomeTabNavigator.Navigator>
      <HomeTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <HomeTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <HomeTabNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </HomeTabNavigator.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('Settings')}
      />
      <DrawerItem
        label="Tab3"
        onPress={() => props.navigation.navigate('Tab3')}
      />
      <DrawerItem
        label="Tab2"
        onPress={() => props.navigation.navigate('Tab2')}
      />
    </DrawerContentScrollView>
  );
}

function getHeaderTitle(route) {
  return getFocusedRouteNameFromRoute(route) ?? 'Home';
}

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          title: "React Navigation",
        //   headerLeft: () => (
        //     <Icon.Button name="ios-menu" size={20} backgroundColor="#111111" onPress={() => navigation.openDrawer()}></Icon.Button>
        // )
        headerLeft: () =>
            <Icon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={[{ color: 'black', marginLeft: 8 }]}
              size={24}
              name={'menu'}
            />
        })}
      />
      <Stack.Screen name="Tab2" component={Tab2} />
      <Stack.Screen name="Tab3" component={Tab3} />
    </Stack.Navigator>
  );
};

export const Drawer = () => {
  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <AppDrawer.Screen name="Stack" component={StackNavigator} />
    </AppDrawer.Navigator>
  );
};

App = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}

export default App;