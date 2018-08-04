import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TopHeader from './TopHeader';

export default class Profile extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '프로필'
    })

    render() {
        return (
            <View>
                <TopHeader />
                
                <Text>
                
                </Text>
            </View>
        )
    }
}