import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwmLable from '../components/SwmLable'

const HoweView = () => {
    // return <View style={styles.container}>
    return <SwmLable title='vinh1111' color="red" />
    //  </View>
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