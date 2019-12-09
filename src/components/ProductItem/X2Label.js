import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {w} from '../../constants';


const X2Label = (props) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>X2</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,161,10,0.7)",
        borderRadius: 8,
        width: 75,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    label: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'DaysOne-Regular',
    }
});

export default X2Label;
