const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';


let initialState = {
    products: [],
    isFetching: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export const incCount = (productId) => ({type: INC_COUNT, productId});
export const decCount = (productId) => ({type: DEC_COUNT, productId});


export default cartReducer;
