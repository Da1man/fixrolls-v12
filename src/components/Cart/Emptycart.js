import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {h, w} from '../../constants';


const EmptyCart = (props) => {
    return (
        <>
            <View style={styles.emptyCartSection}>
                <Text style={styles.emptyCartText}>Корзина Пустая</Text>
            </View>
            <View style={styles.backToCatalogButtonSection}>
                <TouchableOpacity style={styles.backToCatalogButton} onPress={props.toCatalogLink}>
                    <Text style={styles.backToCatalogText}>В Каталог</Text>
                </TouchableOpacity>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    emptyCartSection: {
        height: h / 1.7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        color: '#A5A5A5',
        fontSize: 24,
        textTransform: 'uppercase',
    },
    backToCatalogButtonSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backToCatalogButton: {
        width: w / 2.4,
        height: 42,
        borderRadius: 8,
        backgroundColor: '#4299A1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginBottom: 20,
    },
    backToCatalogText: {
        fontFamily: 'DaysOne-Regular',
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
    }


});

export default EmptyCart;
