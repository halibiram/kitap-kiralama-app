import React, {useContext} from 'react';
import {AuthContext} from './src/context/AuthContext';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/components/Home.js';
import Category from './src/components/Category';
import Qrcode from './src/components/Qrcode';
import Books from './src/components/Books';
import Account from './src/components/Account';
import Details from './src/components/Details';
import Search from './src/components/Search';
import Login from './src/components/Login';
import Singin from './src/components/Singin';
import Singup from './src/components/Singup';
import RentABook from './src/components/RentABook';
import DeliverBook from './src/components/DeliverBook';
import BookLocation from './src/components/BookLocation';
import CategoryCardList from './src/components/CategoryCardList';

import {AuthProvider} from './src/context/AuthContext.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AccountStack = () => {
  const {logout, userInfo} = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Singin"
        component={Singin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Singup"
        component={Singup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const BookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Books"
        component={Books}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RentABook"
        component={RentABook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeliverBook"
        component={DeliverBook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookLocation"
        component={BookLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryCardList"
        component={CategoryCardList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        {/* <Stack.Navigator> */}
        <Tab.Navigator
          tabBarOptions={{
            //style: styles.tabBar,
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
            keyboardHidesTabBar: true,
            showLabel: false,
          }}>
          <Tab.Screen
            name="Ana Sayfa"
            component={HomeStack}
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
            initialParams={{deliver: false}}
            listeners={({navigation}) => ({
              tabPress: e => {
                // Prevent default action
                e.preventDefault();

                // Do something with the `navigation` object
                navigation.navigate('Qrcode', {deliver: false, item: null}); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              },
            })}
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
            name="Book"
            component={BookStack}
            listeners={({navigation}) => ({
              tabPress: e => {
                // Prevent default action
                e.preventDefault();

                // Do something with the `navigation` object
                navigation.navigate('Book', {screen: 'Search'}); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              },
            })}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <MaterialIcons name="menu-book" size={32} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Hesap"
            component={AccountStack}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account"
                  size={32}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
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
