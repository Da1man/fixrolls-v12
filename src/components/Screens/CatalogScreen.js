import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import ProductItem from '../ProductItem/ProductItem';
import {connect} from 'react-redux';
import {decCount, incCount, setProducts, toggleIsFetching, toggleIsInCart} from '../../Redux/catalogReducer';
import {ApiConnect} from '../../WooCommerceApi';
import Preloader from '../common/Preloader';
import {addToCart} from '../../Redux/cartReducer';
import * as _ from 'lodash'

class CatalogScreen extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        ApiConnect.get('products', {
            per_page: 100,
            category: '88',
        })
            .then((response) => {
                //console.log(response)
                let list = [];
                response.map(product => list.push({
                    id: product.id,
                    name: product.name,
                    price: product.regular_price,
                    discountPrice: product.sale_price === '' ? null : product.sale_price,
                    count: 1,
                    isNew: product.meta_data[1].value === 'yes' ? true : false,
                    imageSrc: product.images[0].src,
                    isInCart: false,
                    isX2: product.attributes.length === 0 ? false : product.attributes[0].name === 'x2' ? true : false
                }));
                this.props.setProducts(list);
                this.props.toggleIsFetching(false);
                //console.log(this.props.products)
            });
    };

    render() {
        return (<>

                <ScrollView>
                    <SearchBar/>
                    {this.props.isFetching ? <Preloader /> : null}
                    {
                        this.props.products.map(p => <ProductItem
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            discountPrice={p.discountPrice}
                            count={p.count}
                            isNew={p.isNew}
                            isInCart={p.isInCart}
                            isX2={p.isX2}
                            imageSrc={p.imageSrc}
                            incCount={() => {
                                this.props.incCount(p.id);
                            }}
                            decCount={() => {
                                this.props.decCount(p.id);
                            }}
                            toCartLink={()=> this.props.navigation.navigate('Cart')}
                            addToCart={() => this.props.addToCart(p)}
                            toggleIsInCart = {() => this.props.toggleIsInCart(p.id, true)}
                        />)
                    }
                </ScrollView>
            </>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        products: state.catalog.products,
        isFetching: state.catalog.isFetching,
    };
};

export default connect(mapStateToProps, {
    incCount,
    decCount,
    setProducts,
    toggleIsFetching,
    addToCart,
    toggleIsInCart,

})(CatalogScreen);
