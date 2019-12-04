const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';
const ADD_TO_CART = 'ADD_TO_CART';
import * as _ from 'lodash'


let initialState = {
    cartProducts: [],
    isFetching: false,
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
        case INC_COUNT: {
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
        case DEC_COUNT: {
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
            const newProduct = _.cloneDeep(action.product)
            const newState = {
                ...state, cartProducts: [...state.cartProducts, newProduct]
            }
            return updateTotal(newState);
        }

        default:
            return state;
    }
};

export const incCount = (productId) => ({type: INC_COUNT, productId});
export const decCount = (productId) => ({type: DEC_COUNT, productId});
export const addToCart = (product) => ({type: ADD_TO_CART, product});


export default cartReducer;
