import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import {w} from '../../constants';
import EmptyCart from './Emptycart';
import CartItem from './CartItem';

const Cart = (props) => {
    return (
        <View>

            <View style={styles.container}>
                <View style={styles.cartTitle}>
                    <Text style={styles.cartTitleText}>ВАША КОРЗИНА</Text>
                </View>
                {props.cartProducts.length <= 1
                    ? <EmptyCart backLink={props.backLink}/>
                    : <>
                        {props.cartProducts.map(p => <CartItem
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            discountPrice={p.discountPrice}
                            count={p.count}
                            imageSrc={p.imageSrc}
                            incCount={() => {
                                props.incCount(p.id);
                            }}
                            decCount={() => {
                                props.decCount(p.id);
                            }}
                        />)}
                        <View style={styles.totalSection}>
                            <Text style={styles.totalText}>Итого:</Text>
                            <Text style={styles.totalCounter}>{props.total} руб</Text>
                        </View>
                    </>}
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
    totalSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    totalText: {
        fontFamily: 'DaysOne-Regular',
        color: '#212121',
        fontSize: 26,
        marginRight: 20,
    },
    totalCounter: {
        fontFamily: 'DaysOne-Regular',
        color: '#212121',
        fontSize: 32,
    },
});

export default Cart;
