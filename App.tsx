import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, Pressable} from 'react-native';
import axios from 'axios'

interface Imagem{
  id: string; 
  url: string; 
}

export default function App() {
  const [listaimagens, setListaImagens] = useState<Imagem[]>([])

  const buscarImagem = () => {
      axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then( (res) => {
          console.log(res)
          setListaImagens(res.data.slice(0,5)) 
        })
        .catch( (err) =>
          console.log(err)
        )
  
    
  }
  
  return (
    <View style={styles.container}>
        <Pressable onPress={buscarImagem} style={styles.botao}>
        <Text>Gerar Gatos</Text>
      </Pressable>
      <FlatList
          keyExtractor={item => (item.id)}
          data={listaimagens}
          renderItem={img => (
            <View style={styles.container}>
              <Image style={styles.imagens} source={{uri: img.item.url}}/>
            </View> 
          )
        }
      />
    </View>  
    );
  }
    
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  },

imagens: {
  width: 300, 
  height: 300, 
},
botao: {
  width: '19%', 
  backgroundColor: '#0096F3', 
  padding: 6, 
  borderRadius: 4, 
  alignItems: 'center' 
}
});


