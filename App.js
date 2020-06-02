import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Contatos from './screens/Contatos';
import EditarContato from './screens/EditarContato';

export default function App() {
	const [telaAtual, setTelaAtual] = useState();

	const abrirEditarContato = (contatos, contatoSelecionado) => {
		setTelaAtual(<EditarContato contatos={contatos} contatoSelecionado={contatoSelecionado} onAtualizarContato={atualizarContatos} />);
	};

	const atualizarContatos = (contatosAtualizados) => {
		setTelaAtual(<Contatos onAbrirAtualizar={abrirEditarContato} listaContatos={contatosAtualizados} />);
	};

	if (!telaAtual)
		setTelaAtual(<Contatos onAbrirAtualizar={abrirEditarContato} listaContatos={[]} />);

	return (
		<View style={styles.telaPrincipalView}>
			{telaAtual}
		</View>
	);
}

const styles = StyleSheet.create({
	telaPrincipalView: {
		flex: 1
	}
});