import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {w} from '../../constants'
import Menu from '../../assets/images/menu-icon.svg'
import Logo from '../../assets/images/logo.svg'
import Clock from '../../assets/images/clock-icon.svg'
import Phone from '../../assets/images/phone-icon.svg'

const Header = (props) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.menubox}>
                    <Menu width={42}/>
                </TouchableOpacity>
                <View style={styles.logobox}>
                    <Logo width={w / 3.5}/>
                </View>
                <TouchableOpacity style={styles.timebox}>
                    <Clock />
                </TouchableOpacity>
                <TouchableOpacity style={styles.phonebox}>
                    <Phone />
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        //backgroundColor: 'gray',
        height: 52,
        display: "flex",
        flexDirection: 'row',
    },
    menubox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: w / 5.3,
    },
    logobox: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: w / 1.85,
        paddingLeft: 15,
    },
    timebox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: w / 7.5,
    },
    phonebox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: w / 7.5,
    }
});

export default Header;
