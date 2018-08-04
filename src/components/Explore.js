import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TopHeader from './TopHeader';

export default class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '탐색하기'
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