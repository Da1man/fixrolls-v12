import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './src/components/Header/Header';
import CatalogScreen from './src/components/Screens/CatalogScreen';
import CartScreen from './src/components/Screens/CartScreen';
import {Provider} from 'react-redux';
import store from './src/Redux/store';


class App extends React.Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <StatusBar backgroundColor={'white'} barStyle={'dark-content'} hidden={false}/>
                <Provider store={store}>
                    <Header/>
                    <RootScreen/>
                </Provider>
            </SafeAreaView>
        );
    };
}


const BottomTabNavigator = createMaterialTopTabNavigator(
    {
        Catalog: {
            screen: CatalogScreen,
            navigationOptions: {
                title: 'catalog',
                tabBarLabel: 'Каталог',
                tabBarIcon: ({tintColor}) => (<Icon name='list' size={25} color={tintColor}/>),
            },
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                title: 'cart',
                tabBarLabel: 'Корзина',
                tabBarIcon: ({tintColor}) => (<Icon name='shopping-cart' size={25} color={tintColor}/>),
            },
        },
    },
    {
        showIcon: true,
        barStyle: {
            backgroundColor: 'white',
        },
        activeColor: '#4299A1',
        inactiveColor: 'white',
        initialRouteName: 'Catalog',
        swipeEnabled: true,
        animationEnabled: true,
        shifting: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#4299A1',
            inactiveTintColor: '#BADADD',
            style: {
                backgroundColor: 'white',
            },
            showIcon: true,
            // showLabel: false,
            indicatorStyle: {
                height: 0,
            },
            pressColor: '#4299A1',
        },
    },
);

const RootScreen = createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({});

export default App;
