import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import InputContato from '../components/InputContato';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function EditarContato(props) {

    const atualizarContato = (novoContato) => {
        Alert.alert(
            'Atualizar Contato',
            'Deseja mesmo atualizar esse contato?',
            [{
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => {
                    props.contatos[props.contatos.findIndex(contato => contato.key === novoContato.key.toString())] = novoContato;
                    props.onAtualizarContato(props.contatos);
                }
            }]
        );
    }

    return (
        <View style={styles.telaPrincipalView}>
            <Cartao style={styles.contatoInput}>
                <InputContato contatoAtual={props.contatoSelecionado} onAtualizarContato={atualizarContato} />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    telaPrincipalView: {
        paddingBottom: 50,
        paddingTop: 50,
        alignItems: 'center'
    },
    contatoInput: {
        backgroundColor: cores.backgroundCartaoPrimary
    }
});