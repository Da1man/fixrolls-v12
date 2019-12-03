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

let updateTotal = (cartProducts) => {
    let total = 0;
    // for (let i = 0; i < cartProducts.length; i++) {
    //     total += cartProducts[i].price * cartProducts[i].count
    // }
    cartProducts.map( p => total += p.price * p.count )

    return total
}




const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNT: {
            console.log('total', state.total)
            console.log('upt total', updateTotal(state.cartProducts))
            return {
                ...state,
                cartProducts: state.cartProducts.map(p => {
                    if (p.id === action.productId) {
                        return {...p, count: p.count + 1};
                    }
                    return p;
                }),
                total: updateTotal(state.cartProducts),
            };
        }
        case DEC_COUNT: {
            console.log('total', state.total)
            return {
                ...state,
                cartProducts: state.cartProducts.map(p => {
                    if (p.id === action.productId && p.count != 1) {
                        return {...p, count: p.count - 1};
                    }
                    return p;
                }),
            };
        }

        default:
            return state;
    }
};

export const incCount = (productId) => ({type: INC_COUNT, productId});
export const decCount = (productId) => ({type: DEC_COUNT, productId});


export default cartReducer;
