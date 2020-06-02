import React from 'react';
import { StyleSheet, View } from 'react-native';

const Cartao = (props) => {
    return (
        <View style={{ ...styles.cartao, ...props.style }}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        elevation: 4,
        padding: 12,
        margin: 4,
        borderRadius: 8,
        minWidth: '90%'
    }
});

export default Cartao;