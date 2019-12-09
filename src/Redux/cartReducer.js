import {ApiConnect} from "../WooCommerceApi";

const INC_COUNT_CART = 'INC_COUNT_CART';
const DEC_COUNT_CART = 'DEC_COUNT_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const UPDATE_ORDER_NAME = 'UPDATE_ORDER_NAME';
const UPDATE_ORDER_ADRES = 'UPDATE_ORDER_ADRES';
const UPDATE_ORDER_PHONE = 'UPDATE_ORDER_PHONE';
const UPDATE_ORDER_EMAIL = 'UPDATE_ORDER_EMAIL';
const UPDATE_ORDER_COMMENT = 'UPDATE_ORDER_COMMENT';
const UPDATE_ORDER_DISTRICT = 'UPDATE_ORDER_DISTRICT';
const UPDATE_ORDER_BILLING_METHOD = 'UPDATE_ORDER_BILLING_METHOD';
const SET_BILLING_METHODS = 'SET_BILLING_METHODS';
const CONFIRM_ORDER = 'CONFIRM_ORDER';
import * as _ from 'lodash';


let initialState = {
    cartProducts: [],
    total: 0,
    name: '',
    deliveryAdress: '',
    districts: [
        {value: 'Кимры/Савелово. Заказ от 500 руб'},
        {value: 'Деревни/Сад тов-ва/Док. Заказ от 1000 руб'},
    ],
    selectedDistrict: '',
    billingMethods: [
        {value: 'test', id: '0'},
    ],
    selectedBillingMethod: '',
    phone: '',
    email: '',
    comment: '',
    orderObject: {},

};

let updateTotal = (state) => {
    let total = 0;

    state.cartProducts.map(p => {
        p.discountPrice != null
            ? total += p.discountPrice * p.count
            : total += p.price * p.count;
    });
    return {
        ...state,
        total: total,
    };
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNT_CART: {
            const newState = {
                ...state,
                cartProducts: state.cartProducts.map(p => {
                    if (p.id === action.productId) {
                        return {...p, count: p.count + 1};
                    }
                    return p;
                }),
            };
            return updateTotal(newState);
        }
        case DEC_COUNT_CART: {
            const newState = {
                ...state,
                cartProducts: state.cartProducts.map(p => {
                    if (p.id === action.productId) {
                        return {...p, count: p.count - 1};
                    }
                    return p;
                }),
            };
            return updateTotal(newState);
        }
        case ADD_TO_CART: {
            // const newProduct = _.cloneDeep(action.product)
            if (_.findIndex(state.cartProducts, {id: action.product.id}) != -1) {
                const newState = {
                    ...state, cartProducts: state.cartProducts.map(p => {
                        if (p.id === action.product.id) {
                            return {...p, count: p.count + action.product.count};
                        }
                        return p;
                    }),
                };
                return updateTotal(newState);
            } else {
                const newState = {
                    ...state, cartProducts: [...state.cartProducts, action.product],
                };
                return updateTotal(newState);
            }
        }
        case DELETE_FROM_CART: {

            const deleteIndex = _.findIndex(state.cartProducts, {id: action.productId});
            const newCartProducts = [...state.cartProducts];
            newCartProducts.splice(deleteIndex, 1);
            const newState = {
                ...state,
                cartProducts: newCartProducts,
            };
            return updateTotal(newState);
        }
        case UPDATE_ORDER_NAME: {
            return {
                ...state, name: action.name,
            };
        }
        case UPDATE_ORDER_ADRES: {
            return {
                ...state, deliveryAdress: action.adres,
            };
        }
        case UPDATE_ORDER_PHONE: {
            return {
                ...state, phone: action.phone,
            };
        }
        case UPDATE_ORDER_EMAIL: {
            return {
                ...state, email: action.email,
            };
        }
        case UPDATE_ORDER_COMMENT: {
            return {
                ...state, comment: action.comment,
            };
        }
        case UPDATE_ORDER_DISTRICT: {
            console.log(action.district);
            return {
                ...state, selectedDistrict: action.district,
            };
        }
        case UPDATE_ORDER_BILLING_METHOD: {
            console.log(action.method);
            return {
                ...state, selectedBillingMethod: action.method,
            };
        }
        case SET_BILLING_METHODS: {
            return {
                ...state, billingMethods: action.methods,
            };
        }
        case CONFIRM_ORDER: {
            const newLineItems = [];
            state.cartProducts.map((item) => newLineItems.push({product_id: item.id, quantity: item.count}));
            const newOrderObject = {
                payment_method: state.selectedBillingMethod === 'Оплата курьеру наличными'
                    ? 'cod'
                    : 'cheque',
                payment_method_title: state.selectedBillingMethod,
                set_paid: true,
                billing: {
                    first_name: state.name,
                    last_name: '',
                    address_1: state.deliveryAdress,
                    address_2: '',
                    city: state.selectedDistrict,
                    state: '',
                    postcode: '',
                    country: '',
                    email: state.email,
                    phone: state.phone,
                },
                shipping: {
                    first_name: "",
                    last_name: "",
                    address_1: "",
                    address_2: "",
                    city: "",
                    state: "",
                    postcode: "",
                    country: ""
                },
                line_items: newLineItems,
                shipping_lines: {
                    method_id: "",
                    method_title: "",
                    total: 0,
                },
            };
            console.log(newOrderObject);
            console.log('Creacte an order start');
            ApiConnect.post('orders', newOrderObject, {})
                .then((response) => {
                    console.log(response);
                    console.log('Creacte an orde end');
                });
            return {
                ...state, orderObject: newOrderObject,
            };
        }


        default:
            return state;
    }
};

export const incCount = (productId) => ({type: INC_COUNT_CART, productId});
export const decCount = (productId) => ({type: DEC_COUNT_CART, productId});
export const addToCart = (product) => ({type: ADD_TO_CART, product});
export const deleteFromCart = (productId) => ({type: DELETE_FROM_CART, productId});
export const updateOrderName = (name) => ({type: UPDATE_ORDER_NAME, name});
export const updateOrderAdres = (adres) => ({type: UPDATE_ORDER_ADRES, adres});
export const updateOrderPhone = (phone) => ({type: UPDATE_ORDER_PHONE, phone});
export const updateOrderEmail = (email) => ({type: UPDATE_ORDER_PHONE, email});
export const updateOrderComment = (comment) => ({type: UPDATE_ORDER_PHONE, comment});
export const updateOrderDistrict = (district) => ({type: UPDATE_ORDER_DISTRICT, district});
export const updateOrderBillingMethod = (method) => ({type: UPDATE_ORDER_BILLING_METHOD, method});
export const setBillingMethods = (methods) => ({type: SET_BILLING_METHODS, methods});
export const confirmOrder = () => ({type: CONFIRM_ORDER});


export default cartReducer;
