const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';


let initialState = {
    cartProducts: [
        {
            id: 1,
            name: 'Теплый сет',
            price: 100,
            discountPrice: null,
            count: 1,
            imageSrc: 'https://fixrolls.ru/wp-content/uploads/2019/11/HOTSET.jpg',

        },
        {
            id: 2,
            name: 'Апельсин Ролл',
            price: 100,
            discountPrice: null,
            count: 1,
            imageSrc: 'https://fixrolls.ru/wp-content/uploads/2019/11/HOTSET.jpg',
        },

    ],
    isFetching: false,
    total: 200,
};

let updateTotal = (state) => {
    let total = 0;
    state.cartProducts.map( p => total += p.price * p.count )
    return {
        ...state,
        total
    };
}




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

        default:
            return state;
    }
};

export const incCount = (productId) => ({type: INC_COUNT, productId});
export const decCount = (productId) => ({type: DEC_COUNT, productId});


export default cartReducer;
