import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, Pressable} from 'react-native';

interface Imagem{
  id: string; 
  url: string; 
}

export default function App() {
  const [listaimagens, setListaImagens] = useState<Imagem[]>([])

  const teste = () => {
    const ListaFixa: Imagem[] = [
      {
        id: '1', 
        url: 'https://cdn2.thecatapi.com/images/95.gif'
      }, 
      {
        id: '2', 
        url: 'https://cdn2.thecatapi.com/images/a2.jpg'
      }, 
      {
        id: '3', 
        url: 'https://cdn2.thecatapi.com/images/59l.jpg'
      }, 
      {
        id: '4', 
        url: 'https://cdn2.thecatapi.com/images/9ed.jpg'
      }, 
      {
        id: '5', 
        url: 'https://cdn2.thecatapi.com/images/a40.jpg'
      }
    ]; 
    
    setListaImagens(ListaFixa) 
  }
  

  return (
    <View style={styles.container}>
        <Pressable style={styles.botao}>
        <Text onPress={teste}>Bottom</Text>
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


// {
//   "id": "4a3",
//   "url": "https://cdn2.thecatapi.com/images/4a3.gif",
//   "width": 307,
//   "height": 173
// },
// {
//   "id": "4au",
//   "url": "https://cdn2.thecatapi.com/images/4au.gif",
//   "width": 500,
//   "height": 281
// },
// {
//   "id": "5td",
//   "url": "https://cdn2.thecatapi.com/images/5td.gif",
//   "width": 320,
//   "height": 200
// },
// {
//   "id": "6er",
//   "url": "https://cdn2.thecatapi.com/images/6er.jpg",
//   "width": 2592,
//   "height": 1936
// },
// {
//   "id": "9du",
//   "url": "https://cdn2.thecatapi.com/images/9du.gif",
//   "width": 400,
//   "height": 280
// },
