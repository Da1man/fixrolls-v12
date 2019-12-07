import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {w} from '../../constants';

let deleteButtonClicked = (props1) => {
    props1.toggleIsInCart();
    props1.deleteFromCart();
    // props1.toCatalogLink();
}


const CartItem = (props) => {
    return (
        <View>
            <View style={styles.cartItem}>
                <View style={styles.topSection}>
                    <View style={styles.imageSection}>
                        <Image style={styles.productImage}
                               source={{uri: props.imageSrc}}
                               resizeMode={'cover'}
                        />
                    </View>
                    <View style={styles.infoSection}>
                        <Text style={styles.cartItemName}>{props.name}</Text>
                        {props.discountPrice != null
                        ? <><Text style={styles.cartItemOldPrice}>{props.price * props.count} руб</Text>
                                <Text style={styles.cartItemPrice}>{props.discountPrice * props.count} руб</Text></>
                        : <Text style={styles.cartItemPrice}>{props.price * props.count} руб</Text>}
                    </View>
                </View>
                <View style={styles.deleteItemSection}>
                <View style={styles.addCounter}>
                    {
                        props.count === 1
                            ? <View style={styles.decrement}>
                                <Text style={styles.counterTextLock}>-</Text>
                            </View>
                            : <TouchableOpacity style={styles.decrement} onPress={props.decCount}>
                                <Text style={styles.counterText}>-</Text>
                            </TouchableOpacity>
                    }
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{props.count}</Text>
                    </View>
                    <TouchableOpacity style={styles.increment} onPress={props.incCount}>
                        <Text style={styles.counterText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.deleteButton} onPress={() =>{deleteButtonClicked(props)}}>
                    <Text style={styles.deleteButtonText}>Удалить</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    cartItem: {
        width: '100%',
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    topSection: {
        display: 'flex',
        flexDirection: 'row',

    },
    imageSection: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
    },
    productImage: {
        width: '100%',
        height: w / 3,
    },
    infoSection: {
        width: '60%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    cartItemName: {
        fontFamily: 'DaysOne-Regular',
        color: '#4299A1',
        fontSize: 18,
        textTransform: 'uppercase',
    },
    cartItemOldPrice: {
        fontFamily: 'DaysOne-Regular',
        color: '#212121',
        fontSize: 22,
        textDecorationLine: 'line-through',
        marginRight: 10,
    },
    cartItemPrice: {
        fontFamily: 'DaysOne-Regular',
        color: '#212121',
        fontSize: 26,
    },
    deleteItemSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    addCounter: {
        width: w / 2.3,
        borderColor: '#A5A5A5',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
    },
    decrement: {
        width: (w / 2.4) / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        width: (w / 2.4) / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    increment: {
        width: (w / 2.4) / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontFamily: 'DaysOne-Regular',
        color: '#212121',
        fontSize: 24,
    },
    counterTextLock: {
        fontFamily: 'DaysOne-Regular',
        color: '#A5A5A5',
        fontSize: 24,
    },
    deleteButton: {
        width: w / 2.3,
        height: 42,
        borderRadius: 8,
        backgroundColor: '#4299A1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    deleteButtonText: {
        fontFamily: 'DaysOne-Regular',
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
    },

});

export default CartItem;
