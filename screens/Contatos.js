import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';

import InputContato from '../components/InputContato';
import ContatoItem from '../components/ContatoItem';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function Contato(props) {
    const [contatos, setContatos] = useState(props.listaContatos);
    const [contadorContatos, setContadorContatos] = useState(props.listaContatos.length);

    const adicionarContato = (contatoNome, contatoTelefone) => {
        setContatos((contatos) => {
            contatos = [...contatos, { key: contadorContatos.toString(), value: { contatoNome, contatoTelefone } }];
            setContadorContatos(contadorContatos + 1);
            return contatos;
        });
    }

    const deletarContato = (key) => {
        Alert.alert(
            'Deletar Contato',
            'Deseja mesmo deletar esse contato?',
            [{
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => {
                    setContatos(contatos => {
                        return contatos.filter(contato => {
                            return contato.key !== key;
                        });
                    });
                }
            }]
        );
    }

    return (
        <View style={styles.telaPrincipalView}>
            <Cartao style={styles.contatoInput}>
                <InputContato onAdicionarContato={adicionarContato} />
            </Cartao>

            <Cartao style={styles.contatos}>
                <Text style={styles.ListaHeader}>Contatos Salvos</Text>
                <FlatList
                    style={styles.FlatListStyle}
                    data={contatos}
                    renderItem={
                        contato => (
                            <ContatoItem contato={contato} onDelete={deletarContato} onAbrirAtualizar={() => props.onAbrirAtualizar(contatos, contato)} />
                        )
                    }
                />
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
    ListaHeader: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 30
    },
    FlatListStyle: {
        marginTop: 8
    },
    contatos: {
        backgroundColor: cores.backgroundCartaoPrimary,
        height: '80%'
    },
    contatoInput: {
        backgroundColor: cores.backgroundCartaoPrimary
    }
});