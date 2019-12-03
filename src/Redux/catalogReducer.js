const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_PRODUCTS = 'SET_PRODUCTS';

let initialState = {
    products: [],
    isFetching: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNT: {
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
        case DEC_COUNT: {
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

export const incCount = (productId) => ({type: INC_COUNT, productId});
export const decCount = (productId) => ({type: DEC_COUNT, productId});
export const setProducts = (products) => ({type: SET_PRODUCTS, products });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching });



export default catalogReducer;
