import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

// Screens
import HomeScreen from './screens/home'
import AccumulationScreen from './screens/accumulation';
import CashbackScreen from './screens/cashback';
import BotScreen from './screens/bot';
import HistoryScreen from './screens/history';

// // Icons
// import HomeIcon from './assets/tab_bar_icons/home.svg';
// import AccumulationIcon from './assets/tab_bar_icons/accumulation.svg';
// import CashbackIcon from './assets/tab_bar_icons/cashback.svg';
// import BotIcon from './assets/tab_bar_icons/bot.svg';
// import HistoryIcon from './assets/tab_bar_icons/history.svg';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
                case 'Главная':
                    iconName = 'home'
                    break;
                case 'Накопления':
                    iconName = 'coins'
                    break;
                case 'Кэшбек':
                    iconName = 'wallet'
                    break;
                case 'Ассистент':
                    iconName = 'robot'
                    break;
                case 'История':
                    iconName = 'chart-pie'
                    break;
                default:
                    break;
            }

            return (
                <>
                    <Icon name={iconName} size={size} color={color} style={{marginBottom: 2}} />
                    <Text style={{ color, marginTop: 2 }}>{route.name}</Text>
                </>
            );
          },
          tabBarLabel:() => {return null},
          tabBarActiveTintColor: '#21BE1D',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Главная" component={HomeScreen} />
        <Tab.Screen name="Накопления" component={AccumulationScreen} />
        <Tab.Screen name="Кэшбек" component={CashbackScreen} />
        <Tab.Screen name="Ассистент" component={BotScreen} />
        <Tab.Screen name="История" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}