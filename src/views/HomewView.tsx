import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwmLable from '../components/SwmLable'

const HoweView = () => {
    return <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <SwmLable title='đệ luân già' />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HoweView;