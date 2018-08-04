import React, { Component } from 'react';
import { 
    View, Text, FlatList,
    Image, 
} from 'react-native';
import { connect } from 'react-redux';
import TopHeader from './TopHeader';
import { Card } from "react-native-elements";
import { width, height } from '../utils/helpers';

class Goal extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '내 목표'
    })

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <TopHeader />

                <View style={{flex: 1}}>
                    <Text style={{marginLeft: 5}}>
                        내 목표
                    </Text>
                </View>
                
                <View style={{flex: 5}}>
                    <FlatList
                        keyExtractor={(item, i) => i.toString()}
                        data={this.props.goal.goals}
                        renderItem={({item, index}) => {
                            return (
                                <Card title={(index+1).toString()}>
                                    <Text>{item.title}</Text>
                                    <Text>{item.goal}</Text>
                                    <Text>{item.dueDate}</Text>
                                </Card>
                            )
                        }}
                        horizontal={true}
                        automaticallyAdjustContentInsets={false}
                        removeClippedSubviews={false}
                    />
                </View>

                <View style={{flex: 5, flexDirection: 'row', marginLeft: 5}}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 30}}>"</Text>
                        </View>
                        <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 30}}>지켜보고 있다</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 30, textAlign: 'right'}}>"</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, marginRight: 5}}>
                        <Image
                            style={{width: width / 2 + 5, height: height / 3}}
                            source={require('../assets/character.png')}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, null)(Goal);