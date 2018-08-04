import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TopHeader from './TopHeader';

export default class Explore extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '오픈채팅'
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