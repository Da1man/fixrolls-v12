import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Cart from '../Cart/Cart';
import {connect} from 'react-redux';
import {decCount, deleteFromCart, incCount,} from '../../Redux/cartReducer';
import {toggleIsInCart} from "../../Redux/catalogReducer";


class CartScreen extends React.Component {


    render() {
        return (
            <ScrollView>
                <Cart cartProducts={this.props.cartProducts}
                      toCatalogLink={()=> this.props.navigation.navigate('Catalog')}
                      incCount={this.props.incCount}
                      decCount={this.props.decCount}
                      total={this.props.total}
                      deleteFromCart={this.props.deleteFromCart}
                      toggleIsInCart={this.props.toggleIsInCart}
                />
            </ScrollView>
        );
    };
}

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
})(CartScreen);

