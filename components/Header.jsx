import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Ionicons name='ios-arrow-back' size={32} color='#444' onPress={() => this.props.navigation.goBack()}/>
                <Text
                style={styles.message}>TESTING</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    opacity: 0.72
  }
});