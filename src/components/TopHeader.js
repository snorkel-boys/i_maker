import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';

const Settings = (props) => {
    const { navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
        >
            <View>
                <Text style={{color: 'black'}}>
                    설정 
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const Record = (props) => {
    const { navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Record")}
        >
            <View>
                <Text style={{color: 'black'}}>
                    기록
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const BackButton = (props) => {
    const { navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <View>
                <Icon
                    type="font-awesome"
                    name="chevron-left"
                    size={20}
                />
            </View>
        </TouchableOpacity>
    )
}

export default class TopHeader extends Component {
    render() {
        return (
            <Header
                backgroundColor='white'
                centerComponent={{ text: '아이씨유', style: { color: 'black' } }}
            />
        )
    }
}
