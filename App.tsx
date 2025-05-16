import React from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';


const estilo = StyleSheet.create({
  contenedorTitulo:{
    width:'100%',
    height:90,
    padding:25,
    backgroundColor:'black',
    flex:1,
    flexDirection:'row'
  },
  imglog:{
    width:50,
    height:50
  },
  titulo:{
    color:'#fff',
    fontSize:30,
  },
  contenedor:{
    padding:30,
    backgroundColor:'#6F6F6F',
    height:'100%'
  },
  texto:{
    color:'#f4f4f4',
    fontSize:18,
    textAlign:'justify',
    fontWeight:'400'
  },
  textobtn:{
    color:'black',
    fontSize:16,
    textAlign:'justify',
    fontWeight:'600'
  },
  margen:{
    width: '85%',
    paddingLeft:15,
    borderColor: '#3e3e3e',
    borderRadius: 40,
    borderWidth: 1.5,
    margin: 'auto',
    marginTop: 25,
    backgroundColor:'#919191',

  },
  imagen:{
    width:300,
    height:300,
    margin: 'auto',
    marginTop:25
  },
  botones:{
    width:'85%',
    height:70,
    flex:1,
    margin:'auto',
    marginTop:15,
    justifyContent:'space-evenly',
    flexDirection:'row'

  },
  boton:{
    width:100,
    backgroundColor:'#B3B3B3',
    height:30,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  }


})

export default function App(){
  return(
      <SafeAreaView>
        <View style={estilo.contenedorTitulo}>
          <Image  style={estilo.imglog} source={require('./img/pokeball.png')} resizeMode='contain'/>
          <Text style={estilo.titulo}>
            Pokefeel
          </Text>
        </View>
        <View style={estilo.contenedor}>
          <Text style={estilo.texto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quae! Porro, neque inventore, minima ullam architecto atque saepe quis assumenda voluptas itaque blanditiis consequuntur earum temporibus ratione cumque rerum voluptatem.
          </Text>
          <View >
            <Image style={estilo.imagen}source={require('./img/sleepy-pikachu.png')} resizeMode='contain'/>
          </View>
          <View style={estilo.margen}>
            <TextInput style={estilo.texto} placeholder='Escriba Aqui'/>
          </View>
          <View style={estilo.botones}>
            <TouchableOpacity style={estilo.boton}>
              <Text style={estilo.textobtn}>
                Aceptar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.boton}>
              <Text style={estilo.textobtn}>
                Eliminar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  )
}