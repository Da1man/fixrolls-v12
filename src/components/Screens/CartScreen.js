import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Cart from '../Cart/Cart';


class CartScreen extends React.Component {


    render() {
        return (
            <ScrollView>
                <Cart backLink={()=> this.props.navigation.navigate('Catalog')}/>
            </ScrollView>
        );
    };
}

export default CartScreen;
