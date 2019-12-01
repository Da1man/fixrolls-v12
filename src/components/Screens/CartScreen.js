import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import WooCommerceAPI from 'react-native-woocommerce-api';


class CartScreen extends React.Component {
    static navigationOptions = {
        gesturesEnabled: true
    };


    render() {
        return (
            <ScrollView>

                <TouchableOpacity>
                    <Text >BBBBB</Text>
                    <Text >BBBBB</Text>
                    <Text >BBBBB</Text>
                    <Text >BBBBB</Text>
                    <Text >BBBBB</Text>
                    <Text >BBBBB</Text>
                    <Text >BBBBB</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    };
}

export default CartScreen;
