const INC_COUNT_CATALOG = 'INC_COUNT_CATALOG';
const DEC_COUNT_CATALOG = 'DEC_COUNT_CATALOG';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_IS_IN_CART = 'TOGGLE_IS_IN_CART';
import * as _ from 'lodash'

let initialState = {
    products: [],
    isFetching: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNT_CATALOG: {
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.productId) {
                        return {...p, count: p.count + 1};
                    }
                    return p;
                }),
            };
        }
        case DEC_COUNT_CATALOG: {
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.productId && p.count != 1) {
                        return {...p, count: p.count - 1};
                    }
                    return p;
                }),
            };
        }
        case SET_PRODUCTS: {
            return {
                ...state, products: action.products
            }
        }
        case TOGGLE_IS_IN_CART: {
            console.log('ProductID is in cart -', action.productId)
            console.log(state.products[_.findIndex(state.products, {id: action.productId})])
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.productId) {
                        return {...p, isInCart: true};
                    }
                    return p;
                }),
            };

        }
        case TOGGLE_IS_FETCHING: {
            console.log('Fetching data is ',action.isFetching)
            return  {
                ...state, isFetching: action.isFetching,
            };
        }

        default:
            return state;
    }
};

export const incCount = (productId) => ({type: INC_COUNT_CATALOG, productId});
export const decCount = (productId) => ({type: DEC_COUNT_CATALOG, productId});
export const setProducts = (products) => ({type: SET_PRODUCTS, products });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleIsInCart = (productId) => ({type: TOGGLE_IS_IN_CART, productId})



export default catalogReducer;
