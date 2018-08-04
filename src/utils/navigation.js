import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../components/Home';
import Goal from '../components/Goal';
import Explore from '../components/Explore';
import Chat from '../components/Chat';
import Profile from '../components/Profile';
import { Icon } from 'react-native-elements';

export const Tabs = createBottomTabNavigator({
    // Home: {
    //     screen: Home,
    //     title: '홈'
    // },
    Goal: {
        screen: Goal,
    },
    Explore: {
        screen: Explore,
    },
    Chat: {
        screen: Chat,
    },
    Profile: {
        screen: Profile,
    }
}, {
    initialRouteName: 'Goal',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Goal') {
            iconName = 'flag';
        } else if (routeName === 'Explore') {
            iconName = 'search';
        } else if (routeName === 'Chat') {
            iconName = 'comment'
        } else if (routeName === 'Profile') {
            iconName = 'user'
        }


        return <Icon
                    name={iconName}
                    type='font-awesome'
                    color={tintColor}
                    size={25}
                />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);