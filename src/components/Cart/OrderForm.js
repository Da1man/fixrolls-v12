import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextField, OutlinedTextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';

import Icon from 'react-native-vector-icons/FontAwesome';
import {w} from '../../constants';

let nameInput = React.createRef();
let adresInput = React.createRef();
let districtInput = React.createRef();
let phoneInput = React.createRef();
let mailInput = React.createRef();
let commentInput = React.createRef();
let billingMethot = React.createRef();


let onSubmit = () => {
    alert('111');
};


const OrderForm = (props) => {
    let {
        name, deliveryAdress, districts, selectedDistrict, phone, email, comment,
        updateOrderName, updateOrderAdres, updateOrderPhone, updateOrderEmail, updateOrderComment, updateOrderDistrict,
        billingMethods, selectedBillingMethod, updateOrderBillingMethod,confirmOrder
    } = props;
    return (
        <View>
            <View style={styles.orderFormContainer}>
                <View style={styles.orderSectionTitle}>
                    <Text style={styles.orderSectionTitleText}>ОФОРМЛЕНИЕ ЗАКАЗА</Text>
                </View>
                <TextField
                    ref={nameInput}
                    value={name}
                    label={'Ваше имя'}
                    tintColor={'#4299A1'}
                    characterRestriction={40}
                    onSubmitEditing={onSubmit}
                    onChangeText={(name) => updateOrderName(name)}
                />
                <TextField
                    ref={adresInput}
                    value={deliveryAdress}
                    label={'Адрес доставки'}
                    tintColor={'#4299A1'}
                    characterRestriction={40}
                    onChangeText={(adres) => updateOrderAdres(adres)}
                />
                <Dropdown
                    ref={districtInput}
                    value={selectedDistrict}
                    label={'Район доставки'}
                    data={districts}
                    onChangeText={(district) => updateOrderDistrict(district)}
                />
                <TextField
                    ref={phoneInput}
                    value={phone}
                    label={'Ваш телефон'}
                    tintColor={'#4299A1'}
                    characterRestriction={20}
                    onChangeText={(phone) => updateOrderPhone(phone)}
                />
                <TextField
                    ref={mailInput}
                    value={email}
                    label={'Ваш Email'}
                    tintColor={'#4299A1'}
                    characterRestriction={40}
                    onChangeText={(mail) => updateOrderEmail(mail)}
                />
                <OutlinedTextField
                    ref={commentInput}
                    value={comment}
                    label={'Комментарий к заказу'}
                    tintColor={'#4299A1'}
                    characterRestriction={200}
                    inputContainerStyle={{
                        height: 200,
                    }}
                    containerStyle={{}}
                    multiline={true}
                    onChangeText={(text) => updateOrderComment(text)}
                />
                <Dropdown
                    ref={billingMethot}
                    value={selectedBillingMethod}
                    label={'Метод оплаты'}
                    data={billingMethods}
                    onChangeText={(method) => updateOrderBillingMethod(method)}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
                    <Text style={styles.confirmButtonText}>Оформить заказ</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    orderFormContainer: {
        marginBottom: 20,
    },
    orderSectionTitle: {
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
    orderSectionTitleText: {
        color: '#A5A5A5',
        fontSize: 20,
    },
    confirmButton: {
        width: w / 1.1,
        height: 42,
        borderRadius: 8,
        backgroundColor: '#4299A1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginBottom: 20,
    },
    confirmButtonText: {
        fontFamily: 'DaysOne-Regular',
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
    },

});


export default OrderForm;
