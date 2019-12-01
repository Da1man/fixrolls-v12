import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {w} from '../../constants';
import SearchIcon from '../../assets/images/search-icon.svg'


const SearchBar = (props) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <View style={styles.searchfield}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <SearchIcon />
                    </TouchableOpacity>
                    <View style={styles.searchInputWrapper}>
                        <TextInput style={styles.searchInput} placeholder={'Поиск роллов...'} multiline={false}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: w,
        height: 42,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
    },
    searchfield: {
        backgroundColor: '#F8F8F8',
        width: '100%',
        paddingLeft: 25,
        borderRadius: 8,
        display: "flex",
        flexDirection: 'row',
    },
    searchIcon: {
        height: '100%',
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInputWrapper: {
        height: '100%',
    },
    searchInput: {
        height: 40,
        color: '#A5A5A5',
        fontSize: 16,
        paddingRight: 15,
    }

});

export default SearchBar;
