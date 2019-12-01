import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {w} from '../../constants';


const SaleLabel = (props) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>SALE</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(238,59,81,0.7)",
        borderRadius: 8,
        width: 75,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'DaysOne-Regular',
    }
});

export default SaleLabel;
