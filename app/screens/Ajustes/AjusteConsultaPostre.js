import React from 'react';
import { ScrollView,StyleSheet, View,Text, Image } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import useFetch from "../../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";
import { Button,ListItem, Input,Divider,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItems from '../../Componentes/Ajustes/ConsultaListaProd';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default function AjusteConsultaPostre (){
  
  const { loading, data: julitaspostres } = useFetch('http://localhost:3000/julitaspostres')
  const navigation = useNavigation();
    return(
      
      <ScrollView style={styles.ScrollviewBody}>
        <View style={styles.container}>
              {loading ? <Text>Cargando ...</Text> :
                  <FlatList
                      style={styles.list}
                      data={julitaspostres}                      
                      renderItem={({ item }) =>
                          <ListItems
                              onPress={() => navigation.navigate('inicioDetalle', 
                                { id: item.id, nomPostre: item.nomPostre, precio: item.precio, cantidad: item.cantidad, descripcion: item.descripcion})}
                              id={item.id}
                              nomPostre={item.nomPostre}
                              precio={item.precio}
                              cantidad={item.cantidad}
                              descripcion={item.descripcion}
                          >
                          </ListItems>
                      }
                  />
              }
          </View>
      </ScrollView>
        
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#E88B8B',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
  },
  list: {
      alignSelf: 'stretch',
  }
});



