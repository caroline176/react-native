import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {
  
// Observador de mensagens de mudanças no texto
  changeText = () => {
    alert("HELLO :D");
  }
//Botão para fazer login 
  pressButton = () => {
    alert("Você fez o seu login! :)")
  }

  // Imagem de Fundo maior
  const imagem = { uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/1987871-abstrato-preto-listras-diagonal-fundo-gratis-vetor.jpg' }

  return (
    <View style={styles.container}>
      <ImageBackground source={imagem} style= {styles.image}>

       
      {/* Imagem de fundo menor */}
       <Image
          source={require('./assets/sorriso.jpg')}
          style={[styles.img, { resizeMode: 'cover' }]}
        />


      {/* Título da página */}
        <Text style={{ color: 'white', fontSize: 40, textAlign: 'center', height: 100}}>Faça seu Login
        </Text>


       {/* //Primeira caixa de texto */}
        <TextInput style={styles.inputName}
          placeholder='SeuNome@Gmail.com'
          inputMode='email'
         backgroundColor='white'
         placeholderTextColor= 'black'
        />
       {/* //Segunda caixa de texto */}
        <TextInput style={styles.inputName}
          placeholder='Digite sua senha'
          inputMode='numeric'
          secureTextEntry={true}
          placeholderTextColor='black'
          onChangeText={changeText}
          backgroundColor= 'black'

        />
        {/* Botão do Login */}
        <Button
          style={{ backgroundColor: 'white' }}
          onPress={pressButton}
          title='LOGIN'
          color='gray'
        />

      </ImageBackground>
    </View>
  );
}
// Style da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputName: {
    borderWidth: 4,
    borderColor: 'black',
    padding: 20,
    fontSize: 20,
    backgroundColor: 'gray',
    textAlign:'justify',
  },

  image: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width:150,
    height: 150,


  }
});
  