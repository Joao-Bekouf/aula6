import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const InputContato = (props) => {
    const contatoKey = props.contatoAtual ? props.contatoAtual.item.key : '';
    const [contatoNome, setContatoNome] = useState(props.contatoAtual ? props.contatoAtual.item.value.contatoNome : '');
    const [contatoTelefone, setContatoTelefone] = useState(props.contatoAtual ? props.contatoAtual.item.value.contatoTelefone : '');

    const capturarContatoNome = (nome) => {
        setContatoNome(nome)
    };

    const capturarContatoTelefone = (telefone) => {
        setContatoTelefone(telefone)
    };

    let botaoAcao;
    if (props.onAdicionarContato)
        botaoAcao = <Button
            title="Adicionar Contato"
            onPress={() => props.onAdicionarContato(contatoNome, contatoTelefone)}
        />
    else if (props.onAtualizarContato)
        botaoAcao = <Button
            title="Atualizar Contato"
            onPress={() => props.onAtualizarContato({ value: { contatoNome, contatoTelefone }, key: contatoKey })}
        />

    return (
        <View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Nome do Contato"
                    style={styles.contatoInputText}
                    onChangeText={capturarContatoNome}
                    value={contatoNome}
                />

                <TextInput
                    placeholder="Telefone"
                    style={styles.contatoInputText}
                    onChangeText={capturarContatoTelefone}
                    value={contatoTelefone}
                    keyboardType={"phone-pad"}
                />

                {botaoAcao}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    contatoInputText: {
        maxWidth: '50%',
        minWidth: '50%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 8
    }
});

export default InputContato;