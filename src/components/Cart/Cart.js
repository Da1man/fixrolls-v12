import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import {w} from '../../constants';
import EmptyCart from './Emptycart';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
import {connect} from "react-redux";
import {decCount, deleteFromCart, incCount, setBillingMethods} from "../../Redux/cartReducer";
import {toggleIsInCart} from "../../Redux/catalogReducer";

const Cart = (props) => {
    let {toCatalogLink, cartProducts, incCount, decCount, deleteFromCart, toggleIsInCart, total} = props;
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cartTitle}>
                    <Text style={styles.cartTitleText}>ВАША КОРЗИНА</Text>
                </View>
                {props.cartProducts.length < 1
                    ? <EmptyCart toCatalogLink={toCatalogLink}/>
                    : <>
                        {cartProducts.map(p => <CartItem
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            discountPrice={p.discountPrice}
                            count={p.count}
                            imageSrc={p.imageSrc}
                            incCount={() => {
                                incCount(p.id);
                            }}
                            decCount={() => {
                                decCount(p.id);
                            }}
                            deleteFromCart={()=>{deleteFromCart(p.id)}}
                            toCatalogLink={toCatalogLink}
                            toggleIsInCart={() => toggleIsInCart(p.id, false)}
                        />)}
                        <View style={styles.totalSection}>
                            <Text style={styles.totalText}>Итого:</Text>
                            <Text style={styles.totalCounter}>{total} руб</Text>
                        </View>
                        <OrderForm/>
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
        marginBottom: 20,
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

let mapStateToProps = (state) => {
    return {
        cartProducts: state.cart.cartProducts,
        total: state.cart.total,
    };
};

export default connect(mapStateToProps, {
    incCount,
    decCount,
    deleteFromCart,
    toggleIsInCart,
    setBillingMethods,
})(Cart);

