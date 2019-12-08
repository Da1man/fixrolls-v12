import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Cart from '../Cart/Cart';
import {connect} from 'react-redux';
import {
    confirmOrder,
    decCount,
    deleteFromCart,
    incCount, setBillingMethods,
    updateOrderAdres, updateOrderBillingMethod, updateOrderComment, updateOrderDistrict, updateOrderEmail,
    updateOrderName,
    updateOrderPhone,
} from '../../Redux/cartReducer';
import {toggleIsInCart} from '../../Redux/catalogReducer';
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

        console.log('Getting List of Districts start');
        ApiConnect.get('data', {
            per_page: 100,
        })
            .then((response) => {
                console.log(response);

                console.log('Getting List of Districts end');
            });
    };




    render() {
        let {
            cartProducts,
            incCount,
            decCount,
            total,
            deleteFromCart,
            toggleIsInCart,
            name,
            deliveryAdress,
            districts,
            phone,
            email,
            comment,
            updateOrderName,
            updateOrderAdres,
            updateOrderPhone,
            updateOrderEmail,
            updateOrderComment,
            selectedDistrict,
            updateOrderDistrict,
            billingMethods,
            selectedBillingMethod,
            updateOrderBillingMethod,
            confirmOrder,
        } = this.props;

        return (
            <ScrollView>
                <Cart cartProducts={cartProducts}
                      toCatalogLink={() => this.props.navigation.navigate('Catalog')}
                      incCount={incCount}
                      decCount={decCount}
                      total={total}
                      deleteFromCart={deleteFromCart}
                      toggleIsInCart={toggleIsInCart}
                      name={name}
                      deliveryAdress={deliveryAdress}
                      districts={districts}
                      selectedDistrict={selectedDistrict}
                      phone={phone}
                      email={email}
                      comment={comment}
                      updateOrderName={updateOrderName}
                      updateOrderAdres={updateOrderAdres}
                      updateOrderPhone={updateOrderPhone}
                      updateOrderEmail={updateOrderEmail}
                      updateOrderComment={updateOrderComment}
                      updateOrderDistrict={updateOrderDistrict}
                      billingMethods={billingMethods}
                      selectedBillingMethod={selectedBillingMethod}
                      updateOrderBillingMethod={updateOrderBillingMethod}
                      confirmOrder={confirmOrder}
                />
            </ScrollView>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        cartProducts: state.cart.cartProducts,
        total: state.cart.total,
        name: state.cart.name,
        deliveryAdress: state.cart.deliveryAdress,
        districts: state.cart.districts,
        selectedDistrict: state.cart.selectedDistrict,
        phone: state.cart.phone,
        email: state.cart.email,
        comment: state.cart.comment,
        billingMethods: state.cart.billingMethods,
        selectedBillingMethod: state.cart.selectedBillingMethod,
    };
};

export default connect(mapStateToProps, {
    incCount,
    decCount,
    deleteFromCart,
    toggleIsInCart,
    updateOrderName,
    updateOrderAdres,
    updateOrderPhone,
    updateOrderEmail,
    updateOrderComment,
    updateOrderDistrict,
    updateOrderBillingMethod,
    setBillingMethods,
    confirmOrder,
})(CartScreen);

