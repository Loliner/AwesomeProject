import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    Button
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class RecentChatsScreen extends React.Component {
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
                title="Chat with Lucy"
            />
        )
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', {user: 'Jack'})}
                title="Chat with Jack"
            />
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
});

export default MainScreenNavigator;