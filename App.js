import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {

  const [img,setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')
  let frases = ['A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom senso vai mais longe do que muito conhecimento.',
    'Quem quer colher rosas deve suportar os espinhos.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'A adversidade é um espelho que reflete o verdadeiro eu.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'Uma bela flor é incompleta sem suas folhas.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.',
    'Não há melhor negócio que a vida. A gente há obtém a troco de nada.',
    'O riso é a menor distância entre duas pessoas.',
    'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
    'É mais fácil conseguir o perdão do que a permissão.',
    'Os defeitos são mais fortes quando o amor é fraco.',
    'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.',
    'Surpreender e ser surpreendido é o segredo do amor.',
    'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
    'Todo mundo é capaz de denominar uma dor, exceto quem a sente.']

  function quebrar(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length)
    setTextoFrase(frases[numeroAleatorio])
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciar(){
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }

  return (
    <View style={styles.container}>
      <Image 
      style={{width:230, height:230}}
      source={img}
      />
      <Text style={styles.text}>{textoFrase ? `"${textoFrase}"` : ''}</Text>
      <TouchableOpacity onPress={quebrar}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={reiniciar}>
        <View style={[styles.btnArea, {marginTop:25, borderColor:'black'}]}>
          <Text style={[styles.btnTexto, {color:"black"}]}>Reiniciar</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:20,
    color:'#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  btnArea: {
    width: 300,
    height: 50,
    borderRadius: 25,
    borderColor: '#dd7b22',
    borderWidth:2,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
  },

    btnTexto: {
    color: '#dd7b22',
    fontSize:20,
  }
});
