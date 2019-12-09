import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {w} from '../../constants';
import NewLabel from './NewLabel';
import SaleLabel from './SaleLabel';
import X2Label from './X2Label';

let addButtonClicked = (props) => {
    props.toggleIsInCart();
    props.addToCart();
    props.toCartLink();
}


const ProductItem = (props) => {
    let {imageSrc, isX2, isNew, discountPrice, name, price, count} = props;
    return (
        <View>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={styles.imageSection}>
                        <View style={styles.imageInner}>
                            <Image style={styles.productImage}
                                   source={{uri: imageSrc}}
                                   resizeMode={'cover'}
                            />
                            {isX2 && <View style={styles.disclaimerBox}>
                                <Text style={styles.disclaimerText}>*на фото представлена половина сета</Text>
                            </View>}

                        </View>
                        <View style={styles.labelSection}>
                            {isNew && <NewLabel/>}
                            {discountPrice != null && <SaleLabel/>}
                            {isX2 && <X2Label/>}
                        </View>
                    </View>
                    <View style={styles.nameSection}>
                        <Text style={styles.name}>{name}</Text>
                    </View>


                    <View style={styles.priceSection}>
                        {discountPrice != null
                            ? <><Text style={styles.priceOld}>{price} руб</Text><Text
                                style={styles.priceSale}>{discountPrice} руб</Text></>
                            : discountPrice === null && <Text style={styles.price}>{price} руб </Text>
                        }

                    </View>
                    <View style={styles.addToCartSection}>
                        <View style={styles.addCounter}>
                            {
                                count === 1
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
                        {props.isInCart === false
                            ? <TouchableOpacity style={styles.addButton} onPress={() => addButtonClicked(props)}>
                                <Text style={styles.addButtonText}>Добавить</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity style={styles.addButtonMore} onPress={() => addButtonClicked(props)}>
                                <Text style={styles.addButtonText}>Еще</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: w,
        marginBottom: 40,
        paddingLeft: 15,
        paddingRight: 15,

    },
    container: {
        backgroundColor: 'white',
        paddingBottom: 40,
        //borderBottomWidth: 1,
        //borderBottomColor: "rgba(0,0,0,0.1)",
        elevation: 15,
        borderRadius: 16,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imageSection: {},
    imageInner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: w - 120,
    },
    disclaimerBox: {
        paddingTop: 10,
    },
    disclaimerText: {
        color: '#A5A5A5',
        fontSize: 14,
    },
    labelSection: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: 10,
        top: 10,
    },
    nameSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,

    },
    name: {
        fontFamily: 'DaysOne-Regular',
        color: '#4299A1',
        fontSize: 24,
        textTransform: 'uppercase',


    },
    priceSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    priceOld: {
        fontFamily: 'DaysOne-Regular',
        color: '#212121',
        fontSize: 22,
        textDecorationLine: 'line-through',
        marginRight: 10,

    },
    price: {
        fontFamily: 'DaysOne-Regular',
        color: '#212121',
        fontSize: 26,
    },
    priceSale: {
        fontFamily: 'DaysOne-Regular',
        color: '#EE3B51',
        fontSize: 26,
    },
    addToCartSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    addButton: {
        width: w / 2.3,
        height: 42,
        borderRadius: 8,
        backgroundColor: '#4299A1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    addButtonMore: {
        width: w / 2.3,
        height: 42,
        borderRadius: 8,
        backgroundColor: '#EE3B51',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    addButtonText: {
        fontFamily: 'DaysOne-Regular',
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
    },

});

export default ProductItem;
