import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {w} from '../../constants';
import {Tooltip} from 'react-native-elements';


const NewLabel = (props) => {
    return (
        <View>
            <Tooltip popover={<Text style={styles.tooltipText}>Новый товар в нашем каталоге</Text>}
                     skipAndroidStatusBar={true}
                     height={60}
                     backgroundColor={'white'}
                     overlayColor={'rgba(66,153,161,0.5)'}
            >
                <View style={styles.container}>
                    <Text style={styles.label}>NEW</Text>
                </View>
            </Tooltip>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(66,153,161,0.7)',
        borderRadius: 8,
        width: 75,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    label: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'DaysOne-Regular',
    },
    tooltipText: {
        color: '#A5A5A5',
        fontSize: 16,
        paddingRight: 15,
    },
});

export default NewLabel;
