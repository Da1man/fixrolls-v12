const INC_COUNT_CART = 'INC_COUNT_CART';
const DEC_COUNT_CART = 'DEC_COUNT_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
import * as _ from 'lodash'


let initialState = {
    cartProducts: [],
    total: 0,
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
                    ...state, cartProducts: [...state.cartProducts, action.product]
                };
                return updateTotal(newState);
            }
            // const newState = {
            //     ...state, cartProducts: [...state.cartProducts, action.product]
            // }

        }
        case DELETE_FROM_CART: {
            return state
        }


        default:
            return state;
    }
};

export const incCount = (productId) => ({type: INC_COUNT_CART, productId});
export const decCount = (productId) => ({type: DEC_COUNT_CART, productId});
export const addToCart = (product) => ({type: ADD_TO_CART, product});
export const deleteFromCart = (productId) => ({type: DELETE_FROM_CART, productId})


export default cartReducer;
