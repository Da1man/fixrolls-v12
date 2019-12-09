import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {h, w} from '../../constants';
import {connect} from 'react-redux';

const IconBadge = (props) => {
    let {color, cartCounter} = props;
    return (
        <View style={styles.container}>
            <Icon name='shopping-cart' size={25} color={color}/>
            {cartCounter !== 0
                ? <View style={styles.badgeItem}>
                    <Text>{cartCounter}</Text>
                </View>
                : <></>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    badgeItem: {
        width: 20,
        height: 20,
        position: 'absolute',
        backgroundColor: '#EE3B51',
        right: -10,
        top: -5,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

let mapStateToProps = (state) => {
    return {
        cartCounter: state.cart.cartCounter,
    };
};

export default connect(mapStateToProps,{}) (IconBadge);
