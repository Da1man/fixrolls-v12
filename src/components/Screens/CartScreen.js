import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Cart from '../Cart/Cart';
import {connect} from 'react-redux';
import { setBillingMethods } from '../../Redux/cartReducer';
import {ApiConnect} from '../../WooCommerceApi';


class CartScreen extends React.Component {

    componentDidMount() {
        console.log('Getting Billing Methods start');
        ApiConnect.get('payment_gateways', {
            per_page: 100,
        })
            .then((response) => {
                let list = [];
                console.log(response);
                response.map(function(method) {
                    if (method.id === 'cod' || method.id === 'cheque') {
                        return list.push({value: method.title, id: method.id})
                    }
                })
                this.props.setBillingMethods(list);
                console.log('Getting Billing Methods end');
            });

        // console.log('Getting List of Districts start');
        // ApiConnect.get('orders', {
        //     per_page: 100,
        // })
        //     .then((response) => {
        //         console.log(response);
        //
        //         console.log('Getting List of Districts end');
        //     });
    };

    render() {
        return (
            <ScrollView>
                <Cart toCatalogLink={() => this.props.navigation.navigate('Catalog')}
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
    setBillingMethods,
})(CartScreen);



