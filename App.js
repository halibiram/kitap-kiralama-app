import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  createNavigatorFactory,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/Home.js';
import Category from './components/Category';
import Qrcode from './components/Qrcode';
import Books from './components/Books';
import Account from './components/Account';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from './components/Details';
import Search from './components/Search';
import Login from './components/Login';
import Singin from './components/Singin';
import Singup from './components/Singup';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: 'green',
        inactiveTintColor: 'gray',

        showLabel: false,
      }}>
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Kategoriler"
        component={Category}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="category" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Qrcode"
        component={Qrcode}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={32}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kitaplar"
        component={Books}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="menu-book" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hesap"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Singin"
          component={Singin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Singup"
          component={Singup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default App;
