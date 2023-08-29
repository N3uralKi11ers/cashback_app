import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

// Screens
import HomeScreen from './screens/home'
import StatisticsScreen from './screens/statistics';
import CashbackScreen from './screens/cashback';
import BotScreen from './screens/bot';
import HistoryScreen from './screens/history';

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
                case 'Статистика':
                    iconName = 'chart-pie'
                    break;
                case 'Кэшбек':
                    iconName = 'wallet'
                    break;
                case 'Ассистент':
                    iconName = 'robot'
                    break;
                case 'История':
                    iconName = 'coins'
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
        <Tab.Screen name="Статистика" component={StatisticsScreen} />
        <Tab.Screen name="Кэшбек" component={CashbackScreen} />
        <Tab.Screen name="Ассистент" component={BotScreen} />
        <Tab.Screen name="История" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}