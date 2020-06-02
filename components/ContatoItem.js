import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Cartao from './Cartao';
import cores from '../cores/cores';

const ContatoItem = (props) => {
    const { contato } = props;

    return (
        <TouchableOpacity onLongPress={() => props.onDelete(contato.item.key)} onPress={props.onAbrirAtualizar}>
            <Cartao style={styles.contatoInfo}>
                <Text>{"Nome: " + contato.item.value.contatoNome + "\nTelefone: " + contato.item.value.contatoTelefone}</Text>
            </Cartao>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contatoInfo: {
        backgroundColor: cores.backgroundCartaoSecundary
    }
});

export default ContatoItem;