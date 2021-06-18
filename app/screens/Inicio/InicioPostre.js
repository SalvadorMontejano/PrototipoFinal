import React from 'react';
import { StyleSheet, View, ScrollView, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, ListItem, Button, Icon, SearchBar,Image  } from 'react-native-elements';
import useFetch from "../../hooks/useFetch";

import ListItems from "../../Componentes/Inicio/InicioConsultaListaProd";
import { FlatList } from 'react-native-gesture-handler';


export default function InicioPostre(){
    const { loading, data: julitaspostres } = useFetch('http://localhost:3000/julitaspostres')
    const navigation = useNavigation();
    return(
      
        <ScrollView centerContent={true} styles={styles.viewBody}>
            
              <View style={styles.viewBtn}>
                

                <Image
                  source={require('../../../assets/JulitasLogo.png')}
                  style={{ width: 300, height: 200 }}
                />

                <SearchBar 
                  placeholder="Busca tu postre.."
                  placeholderTextColor='#E88B8B'
                  //onChangeText={this.updateSearch}
                  lightTheme
                  //value={search}                  
                />
                              
                {loading ? <ActivityIndicator /> :   
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
              
              <Card>
                  <Card.Title>Cupcake Chocolate $10</Card.Title>
                 
                  <Card.Divider
                        
                  />
                                   
                <Card.Image source={require('../../../assets/cupcake.jpg')}>
                    
                    <Button
                      icon={<Icon name='shopping-cart' color='#ffffff' />}
                      buttonStyle={styles.btnStyle}
                      containerStyle={styles.btnContainer}
                      title='ORDENAR'
                      onPress={() => navigation.navigate("inicioDetalle")}
                    />
                    <Text style={{marginBottom: 10}}>
                     
                      Cupcake de chocolate con merengue de chocolate.
                    </Text>
                  </Card.Image>
                </Card>

                
          
            </View>
            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnAddMaestro: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#E88B8B",
      borderRadius: 10
    },
    btnContainer: {
      width: "50%"
    },
    viewBtn: {
      flex: 1,
      alignItems: "center",
      marginBottom: 30
    },
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
  
