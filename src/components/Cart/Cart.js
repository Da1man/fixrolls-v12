import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import {w} from '../../constants';
import EmptyCart from './Emptycart';



const Cart = (props) => {
    return (
        <View>

            <View style={styles.container}>
                <View style={styles.cartTitle}>
                    <Text style={styles.cartTitleText}>ВАША КОРЗИНА</Text>
                </View>
                <EmptyCart backLink={props.backLink} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: w,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
    },
    cartTitle: {
        backgroundColor: '#F8F8F8',
        height: 42,
        width: '100%',
        borderRadius: 8,
        elevation: 5,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    cartTitleText: {
        color: '#A5A5A5',
        fontSize: 20,
    },
    emptyCartSection: {
        height: 115,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        color: '#A5A5A5',
        fontSize: 24,
        textTransform: 'uppercase',
    },


});

export default Cart;
